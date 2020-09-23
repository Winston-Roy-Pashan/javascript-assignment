'use strict';
let isSorted = function (arr) {
    let flag = 0;
    let i = 1;
    while (i < arr.length) {
        if (arr[i] < arr[i - 1]) {
            flag = 1;
        }
        i += 1;

    }
    if (!flag) {
        return "Yes, given array is sorted.";
    } else {
        return "No, given array is not sorted.";
    }
};
console.log(isSorted([1, 2, 2]));
console.log(isSorted(['b','a']));