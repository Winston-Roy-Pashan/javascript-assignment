function checkFermat(a, b, c, n) {
    function power(base, exp) {
        if (exp === 0) {
            return 1;
        } else {
            return base * power(base, exp - 1);
        }
    }
    // console.log(power(a,n));
    // console.log(power(b,n));
    // console.log(power(c,n));
    if ((power(a, n) + power(b, n)) === (power(c, n))) {
        console.log("Holy smokes, Fermat was wrong!");
    } else {
        console.log("No, that doesn’t work.");
    }
}

checkFermat(2, 3, 3, 5);
checkFermat(2, 3, 5, 1);
checkFermat(2, 3, 5, 0);