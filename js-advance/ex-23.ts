const reverseNumber = (x: number) => x.toString().split('').reverse().join('')
// let reverseNum = 0;
// while (x != 0) {
//     let digit = x % 10;
//     reverseNum = reverseNum * 10 + digit;
//     x = Math.floor(x / 10)
// }
// return reverseNum;

console.log(reverseNumber(12345))
