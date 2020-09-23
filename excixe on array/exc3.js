'use strict';

let middle = function (arr) {
    let newarray = arr;
    if (arr.length != 0) {
        newarray.shift();
        newarray.pop();
        return newarray;
    }
    
    return undefined;
};

console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 3, 6, 7, 3, 4]));
console.log(middle([9, 7, 8, 6, 7, 6, 2, 3, 4]));
console.log(middle([1, 4]));
console.log(middle([]));
console.log(middle([1]));