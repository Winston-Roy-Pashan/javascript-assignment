let water_bottle = function (n) {
    for (let i = n; i >= 0; i--) {
        if (i === 0) {
            console.log("No bottles of water on the wall,");
            console.log("no bottles of water,");
            console.log("ya’ can’t take one down, ya’ can’t pass it around,");
            console.log("’cause there are no more bottles of water on the wall!");
        } else {
            function firstline(n) {
                console.log(i + " bottles of water on the wall,");
            }

            function secondline(n) {
                console.log(i + " bottles of water ,");
            }

            function thirdline(n) {
                console.log("ya’ take one down, ya’ pass it around,");
                console.log(i - 1 + " bottles of water on the wall.\n")
            }
            firstline(n);
            secondline(n);
            thirdline(n);
        }
    }

}
water_bottle(99);