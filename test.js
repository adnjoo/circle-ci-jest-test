const getGreeting = require('./project');

test('can create a basic greeting', () => {
  expect(getGreeting('Sam')).toBe("Hi Sam");
});


test('test new name', () => {
  expect(getGreeting('Bob')).toBe("Hi Bob");
});