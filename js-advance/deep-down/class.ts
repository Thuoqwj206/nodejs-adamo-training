class Student {
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

    goToSchool(subject: string) {
        console.log("di hoc " + subject);
    }

    working() {
    }
}

const sv1 = new Student('John', 'Shelby', 32, 'Liverpool');
const sv2 = new Student('Thomas', 'Shelby', 22, 'Birmingham');

sv1.goToSchool("Math");
sv2.goToSchool("History");
