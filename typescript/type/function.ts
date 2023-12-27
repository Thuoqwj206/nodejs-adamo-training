const add = (x: number, y: number): number => x + y

//Optional parameters
const add1 = (x: number, y: number, z?: number): number => z ? x + y + z : x + y

//Default parameters
const add2 = (x: number, y: number, z: number = 10): number => x + y + z


console.log(add1(10, 5, 2), add2(5, 2))