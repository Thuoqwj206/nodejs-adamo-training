type TUser = {
    id: number,
    name: string,
    gmail: string
}

const getUserById = (id: number): TUser => {
    return {
        id,
        name: `User${id}`,
        gmail: `user${id}@gmail.com`
    }
}

const displayUserInfo = (user: TUser) => {
    console.log(`User ID: ${user.id}`)
    console.log(`User Name: ${user.name}`)
    console.log(`User Gmail: ${user.gmail}`)
}
export { getUserById, displayUserInfo }
//The main difference is that you can only have one default export per file 
export default TUser;
