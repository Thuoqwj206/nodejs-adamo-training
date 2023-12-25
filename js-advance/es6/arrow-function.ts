const sum = (a: number , b: number):number => {
    return a + b;
};

const multiple = (a: number, b: number): number =>{
    return a*b;
}

const helloWorld = (): string => {
    return 'Hello World'
}
console.log(sum(1,2));
console.log(multiple(1,2));
console.log(helloWorld());