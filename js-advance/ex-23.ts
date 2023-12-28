const reverseNumber = (x: number): number => x.toString().split('').reverse().join('') as unknown as number
// let reverseNum = 0;
// while (x != 0) {
//     let digit = x % 10;
//     reverseNum = reverseNum * 10 + digit;
//     x = Math.floor(x / 10)
// }
// return reverseNum;

console.log(reverseNumber(12345))
