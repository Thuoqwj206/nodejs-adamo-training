<<<<<<< HEAD
const sumAll = (...rests: number[]) => rests.reduce((sum, rest) => sum + rest)
=======
const sumAll = (...rests: number[]) => rests.reduce((sum, rest) => sum += rest)
>>>>>>> a37dc43880572342c400b9f9fd1852f5027a1c2b


console.log(sumAll(1, 2, 3))
console.log(sumAll(1, 2, 3, 4, 5))
console.log(sumAll(1, 2, 3, 4, 5, 5, 6, 7))
