
export type User = {
    id: number;
    username: string;
    email: string;
}

let users: User[] = [
    { id: 1, username: 'user1', email: 'user1@example.com' },
    { id: 2, username: 'user2', email: 'user2@example.com' },
];

export const getAllUsers = (): User[] => {
    return users;
};

export const getUserById = (id: number): User | undefined => {
    return users.find((user) => user.id === id);
};

export const createUser = (user: User): User => {
    user.id = users.length + 1;
    users.push(user);
    return user;
};
