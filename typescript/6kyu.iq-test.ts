export function iqTest(numbers: string): number {
  let [cnt, ids] = [Array(2).fill(0), Array(2)];
  
  numbers
    .split(' ')
    .map(Number)
    .forEach((x, i) => {
      cnt[x%2] += 1;
      ids[x%2] = i+1;
    });
  
  return cnt[0] === 1? ids[0] : ids[1];
}