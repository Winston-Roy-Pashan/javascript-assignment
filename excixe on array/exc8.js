'use strict';


function isDoubloon(str) {
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (str[i] === str[j]) {
                str = str.replace(str[i], '*');
                str = str.replace(str[j], '*');
            }
        }
    }
    for (let char of str) {
        if (char != '*') {
            return false;
        }
    }

    return true;

}
console.log(isDoubloon("winston"));
console.log(isDoubloon("abccb"));
console.log(isDoubloon("sees"));
console.log(isDoubloon("seess"));