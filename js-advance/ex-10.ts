const persons = [
  { name: 'John', surname: 'Shelby', id: 1 },
  { name: 'Arthur', surname: 'Shelby', id: 2 },
  { name: 'Tommy', surname: 'Shelby', id: 3 }
]

const usersWithFullName: { id: number; fullName: string }[] = persons.map(person => ({
  id: person.id,
  fullName: person.name + ' ' + person.surname
}));
console.log(usersWithFullName)