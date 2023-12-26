const sumAll = (...rests:number[]) => {
    let sum = 0;
    rests.map(
        (rest) => {sum+=rest}
    )
    return sum;
}

console.log(sumAll(1,2,3))
console.log(sumAll(1,2,3,4,5))
console.log(sumAll(1,2,3,4,5,5,6,7))
