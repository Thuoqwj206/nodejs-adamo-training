const arr3 = [1,2,3,4,5,6]
const[one,two,...other] = arr3;

console.log(one)
console.log(two)
console.log(other)

const student = {
    name1: 'John Shelby',
    age: 23,
    address: 'Birmingham'
}

const{name1,...other1} = student;
console.log(name1)
console.log(other1)