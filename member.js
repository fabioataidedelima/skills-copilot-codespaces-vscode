function skillsMember() {
  return {
    name: 'skillsMember',
    type: 'MemberExpression',
    message: 'You should use `this` to access the properties of the object',
    test: 'this'
  };
}