let resultType: any;
resultType = 1;
resultType = 'Hello World'
resultType = false;

let resultType2: string | number
resultType2 = 1;
resultType2 = "ResultType2"

const choices: string[] = ['NO', 'YES'];
const processAnswer = (answer: number | boolean) => console.log(!!answer ? choices[1] : choices[0])
processAnswer(0)
