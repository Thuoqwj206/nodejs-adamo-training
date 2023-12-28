const arr3 = [1, 2, 3, 4, 5, 6]
const [one, two, ...other] = arr3;

console.log(one)
console.log(two)
console.log(other)

type TStudent = { name: string, age: number, address: string }
const student: TStudent = {
    name: 'John Shelby',
    age: 23,
    address: 'Birmingham'
}

<<<<<<< HEAD
const { name: studentName, ...other1 } = student;
console.log(studentName)
=======
const { name: name, ...other1 } = student;
console.log(name)
>>>>>>> a37dc43880572342c400b9f9fd1852f5027a1c2b
console.log(other1)

const changeName = (student: TStudent, updateStudent: Partial<TStudent>) => {
    return { ...student, ...updateStudent }
}
console.log(changeName(student, { name: 'Arthur Shelby' }))