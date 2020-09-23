'use strict';
function nestedSum(t) {
    let sum = 0;
    for (let row of t) {
        for (let col of row) {
                sum += col;
        }
    }
    return sum;
}

console.log(nestedSum([[1, 2], [3], [4, 5, 6]]));
console.log(nestedSum([[1, 2], [3], [4, 5],[3]]));




