const copySorted = (arr: string[]): string[] => {
  let copiedArr = arr.slice().sort();
  return copiedArr;
};

let stringArray = ["HTML", "JavaScript", "CSS"];
console.log(copySorted(stringArray));
console.log(stringArray);
