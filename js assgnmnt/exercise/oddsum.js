function oddSum(n) {
    if (n % 2 === 0) {
        return "its not an odd number ";
    }

    console.log(n);

    if (n === 1) {
        return 1;
    } else {
        return n + oddSum(n - 2);
    }
}
console.log(oddSum(7));
console.log(oddSum(8));
console.log(oddSum(13));