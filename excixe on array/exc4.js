'use strict';

let chop = function (arr) {
    if (arr.length != 0) {
        arr.pop();
        arr.shift();
        return arr;
    }
    return undefined;
};

console.log(chop([1, 2, 3, 4]));
console.log(chop([1, 3, 6, 7, 3, 4]));
console.log(chop([9, 7, 8, 6, 7, 6, 2, 3, 4]));
console.log(chop([1, 4]));
console.log(chop([]));