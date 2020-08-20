const MINUTE = 60;
const HOUR = MINUTE * 60;

const format = (input: number): string =>
  `${input.toLocaleString(undefined, { minimumIntegerDigits: 2 })}`;

export function humanReadable(seconds: number): string {
  const h = seconds / HOUR;
  const m = (seconds % HOUR) / MINUTE;
  const s = (seconds % HOUR) % MINUTE;
  return [h, m, s].map((item) => format(Math.floor(item))).join(':');
}
