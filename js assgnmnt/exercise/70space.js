'use strict';
function rightJustify(s) {
    let str = String(s);

    while (str.length < 70) {
        str = " " + str;
    }

    return str;
}
console.log(rightJustify('monty'));