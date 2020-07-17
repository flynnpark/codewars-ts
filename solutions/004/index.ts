export function divisors(n: number): number {
  let count = 0;
  for (let i = 1; Math.pow(i, 2) <= n; i++) {
    if (Math.pow(i, 2) == n) count++;
    else if (n % i === 0) count += 2;
  }
  return count;
}
