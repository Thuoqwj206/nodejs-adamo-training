// Primitive and Inferred
const number: number = 1
const hello: string = 'Hello World'
const isTrue = 'false'

//Object Type
const Dev: { name: string, age: number, gender: string } = {
    name: 'Shelby',
    age: 32,
    gender: 'male'
}

//Optional Properties
const Dev1: { name: string, age: number, gender?: string } = {
    name: 'Shelby',
    age: 32
}

//ReadOnly Properties
const Dev2: { readonly name: string, age: number, gender: 'female' } = {
    name: 'Shelby',
    age: 32,
    gender: 'female'
}

//Type Aliases
type devName = string;
const d: devName = 'Shelby';
type Dev3 = { name: string; age: number; gender: string }
const dev: Dev3 = {
    name: 'Shelby',
    age: 32,
    gender: 'Male'
}
//Type Assertions
const multiple1 = (a: number, b: number): number => a * b
const result = multiple1(2, 3) as unknown as string
const result2 = multiple1(3, 4) as unknown as string
console.log(result, result2)
