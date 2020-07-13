import { longestConsec } from '../solutions/003';

test('001. Two Oldest Ages', () => {
  expect(
    longestConsec(['zone', 'abigail', 'theta', 'form', 'libe', 'zas'], 2)
  ).toEqual('abigailtheta');
  expect(
    longestConsec(
      [
        'ejjjjmmtthh',
        'zxxuueeg',
        'aanlljrrrxx',
        'dqqqaaabbb',
        'oocccffuucccjjjkkkjyyyeehh',
      ],
      1
    )
  ).toEqual('oocccffuucccjjjkkkjyyyeehh');
  expect(
    longestConsec(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 3)
  ).toEqual('ixoyx3452zzzzzzzzzzzz');
});
