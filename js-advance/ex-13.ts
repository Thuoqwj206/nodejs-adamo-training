const isPerfectNumber = (x: number): boolean => {
    let divisor = []
    for (let i = 1; i <= x; i++) {
        if (x % i === 0) {
            divisor.push(i)
        }
    }
    if (divisor.reduce((a, b) => a + b, 0) / x === 2) {
        return true;
    }
    return false
}

console.log(isPerfectNumber(6))