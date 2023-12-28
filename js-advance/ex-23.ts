<<<<<<< HEAD
const reverseNumber = (x: number): number => x.toString().split('').reverse().join('') as unknown as number
=======
const reverseNumber = (x: number) => x.toString().split('').reverse().join('')
>>>>>>> a37dc43880572342c400b9f9fd1852f5027a1c2b
// let reverseNum = 0;
// while (x != 0) {
//     let digit = x % 10;
//     reverseNum = reverseNum * 10 + digit;
//     x = Math.floor(x / 10)
// }
// return reverseNum;

console.log(reverseNumber(12345))
