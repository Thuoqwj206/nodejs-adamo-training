import { getUserById, displayUserInfo } from "./module-export";
// You can give it any name you like for default import
import UserType from "./module-export"

const userId = [1, 2, 3]
userId.map(id => displayUserInfo(getUserById(id)))

const users: UserType[] = [
    { id: 1, name: 'John', gmail: 'john@gmail.com' }
]
