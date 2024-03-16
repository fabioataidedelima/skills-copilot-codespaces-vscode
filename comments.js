// Create web server
var express = require('express');
var app = express();
var path = require('path');
// Set the view engine to ejs
app.set('view engine', 'ejs');
// Serve static files
app.use(express.static(path.join(__dirname, 'public')));
// Generate random number
function generateRandomNumber() {
  return Math.floor((Math.random() * 1000) + 1);
}
// Create an array to store comments
var comments = [];
// Create a route for comments
app.get('/comments', function(req, res) {
  res.render('comments', {comments: comments});
});
// Create a route to add a comment
app.get('/add', function(req, res) {
  var comment = req.query.comment;
  var random = generateRandomNumber();
  comments.push({id: random, comment: comment});
  res.redirect('/comments');
});
// Create a route to delete a comment
app.get('/delete/:id', function(req, res) {
  var id = req.params.id;
  comments = comments.filter(function(comment) {
    return comment.id != id;
  });
  res.redirect('/comments');
});
// Start the server
app.listen(3000, function() {
  console.log('Server is running on port 3000');
});
```
#### 3. Create a template for comments
```html
<!-- File: comments.ejs -->
<!DOCTYPE html>
<html>
  <head>
    <title>Comments</title>
  </head>
  <body>
    <h1>Comments</h1>
    <form action="/add" method="get">
      <input type="text" name="comment">
      <input type="submit" value="Add">
    </form>
    <ul>
      <% comments.forEach(function(comment) { %>
        <li>
          <%= comment.comment %>
          <a href="/delete/<%= comment.id %>">Delete</a>
        </li>
      <% }); %>
    </ul>
  </body>
</html>
```
#### 4. Create a folder for static files
```sh
$ mkdir public
```
#### 5. Create a CSS file
```css
/* File: public/style.css */
body {
  font-family: Arial, sans-serif;
}
input[type="text"] {
  padding: 10px;
  font-size: 16px;
  border-radius: 5px