const reverse = require('./index').reverse;
const reverseA = require('./index').reverseA;

test('Reverse function exists', () => {
  expect(reverse).toBeDefined();
});

test('Reverse reverses a string', () => {
  expect(reverse('abcd')).toEqual('dcba');
});

test('Reverse reverses a string', () => {
  expect(reverse('  abcd')).toEqual('dcba  ');
});

test('ASYNC/AWAIT Reverse reverses a string',async () => {
  expect(await reverseA('  abcd')).toEqual('dcba  ');
});
