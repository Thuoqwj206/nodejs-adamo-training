
function transform(numbers: number[], callback: (num: number) => number): number[] {
    const result: number[] = [];
    for (let i = 0; i < numbers.length; i++) {
      result[i] = callback(numbers[i]);
    }
    return result;
  }

  const double = (num: number): number => {
    return num * 2;
  }
  
  const arr: number[] = [1, 2, 3, 4, 5];
  console.log(transform(arr, double));