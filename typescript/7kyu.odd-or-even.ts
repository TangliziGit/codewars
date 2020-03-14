export function oddOrEven(array: number[]) {
  return array.reduce((x, y) => x+y, 0) % 2 === 0 ? "even" : "odd";
}