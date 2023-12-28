const promiseExp = (exp: boolean) => {
    return new Promise((resolve, reject) => {
        if(exp == true){
            resolve('Hello World')
        }
        else{
            reject('Its totally wrong')
        }
    })
}

promiseExp(true).then(data => {
    console.log(data)
}).catch(error => {
    console.log(error)
})