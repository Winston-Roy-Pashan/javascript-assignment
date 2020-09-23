'use strict';
let abecedarian = function (str) {
    let index = 0;
    let c = 'a';
    while (index < str.length) {
        if (c > str.charAt(index)) {
            return false;
        }
        c = str.charAt(index);
        index = index + 1;
    }
    return true;
};
console.log(abecedarian('abcefrz'));
console.log(abecedarian('diluvy'));
console.log(abecedarian('abcefzw'));
console.log(abecedarian('sbcefrz'));