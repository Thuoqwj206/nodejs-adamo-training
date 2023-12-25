const filterRange = (arr: number[], a: number, b: number) =>{
    let result = arr.filter(num => num >= a && num <=b)
    return result;
}
const array = [1, 2, 3, 4, 5, 6];
console.log(filterRange(array,3,5));
