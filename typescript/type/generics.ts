//Not recommended to use when : the return value does not need to be flexible or have no relation to the input values
type hasAge = {
    age: number
}

const getOldest = <T extends hasAge>(people: T[]): T => people.sort((a, b) => b.age - a.age)[0]

type Person = {
    name: string,
    age: number
}

const people: Person[] = [
    { name: 'Thomas Shelby', age: 32 },
    { name: 'John Shelby', age: 22 },
    { name: 'Arthur Shelby', age: 42 }
]
const oldestPerson = getOldest(people).name
console.log(oldestPerson)

//Declaring generic function with parameters which are different types
const concatTypes: <S, N>(a: S, b: N) => [S, N] = (a, b) => [a, b]

const types = concatTypes<string, number>('Hello ', 500)
console.log(types)