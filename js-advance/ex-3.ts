const filterRange = (arr: number[], a: number, b: number) => arr.filter(num => num >= a && num <= b)

const array = [1, 2, 3, 4, 5, 6];
console.log(filterRange(array, 3, 5));
