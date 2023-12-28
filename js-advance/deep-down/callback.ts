
function transform(numbers: number[], callback: (num: number) => number): number[] {
  const result: number[] = [];
  numbers.map(number => result[numbers.indexOf[number]] = callback(numbers.indexOf[number]))
  return result;
}

const double = (num: number): number => num * 2;

const arr: number[] = [1, 2, 3, 4, 5];
console.log(transform(arr, double));