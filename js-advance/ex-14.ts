let array1 = [1, 2, 8, 4, 1, 3, 1, 8, 3];

const counter = {};

array1.map(ele => {
    if (counter[ele]) {
        counter[ele] += 1;
    } else {
        counter[ele] = 1;
    }
});

console.log(counter)
