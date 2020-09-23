'use strict';
let hasDuplicate = function (arr) {
    let size = arr.length;
    const set = new Set(arr);
    if (Array.from(set).length === size) {
        return false;
    }
    return true;

};

console.log(hasDuplicate(['foo', 'bar', 'baz', 'foo']));
console.log(hasDuplicate(['foo', 'bar', 'baz']));
console.log(hasDuplicate([1, 2, 3, 4]));
console.log(hasDuplicate([1, 2, 2, 3]));