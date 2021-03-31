function mySqrt(x) {
    let lo = 0;
    let hi = Math.ceil(x / 2);
    let mid = 0;

    while (lo <= hi) {
        mid = Math.floor((lo + hi) / 2);
        if (mid * mid < x) {
            lo = mid + 1;
        } else if (mid * mid > x) {
            hi = mid - 1;
        } else {
            return mid;
        }
    }
    return hi;
}

console.log(mySqrt(4));

console.log(mySqrt(8));
