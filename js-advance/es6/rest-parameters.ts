const sumAll = (...rests: number[]) => rests.reduce((sum, rest) => sum + rest)


console.log(sumAll(1, 2, 3))
console.log(sumAll(1, 2, 3, 4, 5))
console.log(sumAll(1, 2, 3, 4, 5, 5, 6, 7))
