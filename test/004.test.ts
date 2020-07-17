import { divisors } from '../solutions/004';

test('004. Count the divisors of a number', () => {
  expect(divisors(1)).toEqual(1);
  expect(divisors(10)).toEqual(4);
  expect(divisors(11)).toEqual(2);
  expect(divisors(54)).toEqual(8);
  expect(divisors(64)).toEqual(7);
});
