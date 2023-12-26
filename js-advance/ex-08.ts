
const camelize = (str: string) => str.replace(/-./g, match => match[1].toUpperCase())

let string = 'background-color'
console.log(camelize(string));
