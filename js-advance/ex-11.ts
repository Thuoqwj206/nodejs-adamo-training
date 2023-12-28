const users = [
    { name: 'Thomas', age: 32 },
    { name: 'John', age: 22 },
    { name: 'Arthur', age: 38 }
]
users.sort((a, b) => a.age - b.age);
console.log(users)