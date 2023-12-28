class User {
    fName: string;
    lName: string;
    Age: number;
    Address: string;

    constructor(fName: string, lName: string, Age: number, Address: string) {
        this.fName = fName;
        this.lName = lName;
        this.Age = Age;
        this.Address = Address;
    }
}
const getAverageAge = (arr: Array<User>) => {
    let totalAge = 0;
    arr.map(user => totalAge += user.Age)
    return totalAge / arr.length;
}
const u1 = new User('John', 'Shelby', 32, 'Liverpool');
const u2 = new User('Thomas', 'Shelby', 22, 'Birmingham');
const u3 = new User('Arthur', 'Shelby', 42, 'Birmingham');

const users1 = [u1, u2, u3];

console.log(getAverageAge(users1))
