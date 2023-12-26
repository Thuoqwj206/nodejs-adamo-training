const exm = {
    fullName: "Tommy Shelby",
    learn: () => 'Learning Nodejs'
  };
  console.log(`${exm.fullName.toUpperCase()} is ${exm.learn()}`);


let price = 10;
let VAT = 0.25;

let total = `Total: ${(price * (1 + VAT)).toFixed(1)}`;
console.log(total);