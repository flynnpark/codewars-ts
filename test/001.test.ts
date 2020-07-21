import { twoOldestAges } from '../solutions/001';

test('1. Two Oldest Ages', () => {
  expect(twoOldestAges([1, 5, 87, 45, 8, 8])).toEqual([45, 87]);
});
