import { G964 } from '../solutions/006';

test('6. Count the divisors of a number', () => {
  expect(G964.perimeter(5)).toEqual(80);
  expect(G964.perimeter(7)).toEqual(216);
  expect(G964.perimeter(20)).toEqual(114624);
  expect(G964.perimeter(30)).toEqual(14098308);
});
