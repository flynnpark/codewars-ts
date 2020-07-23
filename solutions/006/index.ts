export class G964 {
  private static fib = (n: number): number => {
    var a = 1,
      b = 1,
      tmp;
    while (n-- > 0) {
      tmp = a;
      a = b;
      b += tmp;
    }
    return a;
  };

  public static perimeter = (n: number): number => {
    return 4 * (G964.fib(n + 2) - 1);
  };
}
