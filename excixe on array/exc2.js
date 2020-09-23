'use strict';
let cumulativeSum = function (arr) {
    let newarray = [];

    for (let i = 0; i < arr.length; i++) {
        if (i === 0) {
            newarray.push(arr[0]);
        } else {
            let sum = arr[i] + newarray[i - 1];
            newarray.push(sum);
        }
    }
    return newarray;

};

console.log(cumulativeSum([1, 2, 3, 4]));
console.log(cumulativeSum([1, 2, 3]));
console.log(cumulativeSum([1, 2, 3, 9, 8, 4, 5]));