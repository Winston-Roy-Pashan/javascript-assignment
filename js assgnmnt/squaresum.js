'use strict';
function large_num(num1, num2, num3) {
    //let large=num1>num2?(num1>num3?num1:num3):(num2>num3?num2:num3);
    let small = num1 > num2 ? (num2 > num3 ? num3 : num2) : (num1 > num3 ? num3 : num1);
    let sum = num1 + num2 + num3;
    sum -= small;
    if ((num1 + num2) === sum) {
        return square(num1) + square(num2);
    } else if ((num1 + num3) === sum) {
        return square(num1) + square(num3);
    } else {
        return square(num2) + square(num3);
    }
}
function square(x) {
    return x * x;
}
console.log("sum of square of 2 largest num is " + large_num(3, 2, 4));
