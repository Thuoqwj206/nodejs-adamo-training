//Basically, type has almost functions of interface => They be be used flexibly
//Interface can not be used to declare primitive,tuple,union types which should be declared as type
//Interface can be recall and added more properties while type could not do that
interface IPerson {
    firstName: string,
    lastName: string,
    age: number
}
interface IPerson {
    address: string
}

const getFullName = (person: IPerson) => person.firstName + ' ' + person.lastName

const person1: IPerson = {
    firstName: 'Tommy',
    lastName: 'Shelby',
    age: 32,
    address: 'Birmingham'
}

console.log(getFullName(person1))