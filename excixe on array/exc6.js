'use strict';
let isAnagram = function (str1, str2) {
    if (str1.length === str2.length) {
        str1 = str1.toLowerCase();
        str2 = str2.toLowerCase();
        for (let char1 of str1) {
            for (let i = 0; i < str2.length; i++) {
                if (char1 === str2[i]) {
                    break;
                }
                if (i == str2.length - 1) {
                    return false;
                }

            }
        }
        return true;
    }
    return false;
};

console.log(isAnagram("listen", "silent"));
console.log(isAnagram("Ton", "Not"));
console.log(isAnagram("Ton", "rot"));