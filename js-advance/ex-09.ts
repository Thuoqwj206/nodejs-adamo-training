
let john = { name: 'John', age: 25 }
let pete = { name: 'Pete', age: 25 }
const person = [john, pete];

const names = person.map(person => person.name);

console.log(names)

