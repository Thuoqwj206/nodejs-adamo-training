const getMaxSubSum = (arr: number[]) => {
    let maxSum = 0;
    let currentSum = 0;
    for (let i = 0; i < arr.length; i++) {
        currentSum = Math.max(arr[i] + currentSum, arr[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
}

const numberArr = [1, -2, 3, 4, -1, 2, 1, -5, 4];
console.log(getMaxSubSum(numberArr))