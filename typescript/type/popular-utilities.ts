//Partial :construct a type with all properties set to optional
type User = {
    name: string,
    age: number
}
const updateUser = (user: User, userUpdate: Partial<User>) => {
    return { ...user, ...userUpdate }
}
const user = {
    name: 'Shelby',
    age: 50
}
const user1 = updateUser(user, { age: 32 })
console.log(user, user1)
//--------------------------------------------------------

//Required: construct a type with all properties set to required
const updateUser2 = (user: User, userUpdate: Required<User>) => {
    return { ...user, ...userUpdate }
}
//We have to reassign all the properties of User for UserUpdate which is parameter
const user2 = updateUser2(user, { name: 'Shelby', age: 30 })
console.log(user2)
//--------------------------------------------------------

//Readonly: the properties of the conducted type cannot be reassigned
const _updateUser3 = (user: User, userUpdate: Readonly<User>) => {
    return { ...user, ...userUpdate }
}
//const user3 = updateUser3(user, {name: 'Arthur'})  => Its return error when trying to reassign
//--------------------------------------------------------

//Record: constructs an object type whose property keys are Keys and whose property values are Type
enum EUserName {
    TOMMY = 'Tommy',
    JOHN = 'John',
    ARTHUR = 'Arthur'
}

const users: Record<EUserName, User> = {
    Tommy: { name: 'Tommy Shelby', age: 32 },
    John: { name: 'John Shelby', age: 22 },
    Arthur: { name: 'Arthur Shelby', age: 42 }
}

console.log(users)