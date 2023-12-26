const countNumber = (n: number) => {
    var count = 0;
    while (n > 10) {
        n /= 10;
        count++
    }
    return count + 1
}

console.log(countNumber(3423434324234))