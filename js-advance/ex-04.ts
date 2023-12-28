let ar = [5, 3, 8, 1, 9, 2, 4, 15, 18, 42, 39];

function filterRangeInPlace(arr: number[], a: number, b: number) {
  for (let i = 0; i < arr.length; i++) {
    if (a > arr[i] || arr[i] > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}
filterRangeInPlace(ar, 1, 4);

console.log(ar);