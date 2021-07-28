function dietPlanPerformance(calories, k, lower, upper) {
    let total = 0;

    let windowSum = 0;

    for (let i = 0; i < k; i++) {
        windowSum += calories[i];
    }

    let l = 0;
    let r = l + k - 1;

    while (r < calories.length) {
        if (windowSum > upper) {
            total++;
        }
        if (windowSum < lower) {
            total--;
        }
        r++;
        windowSum += calories[r];
        windowSum -= calories[l];
        l++;
    }

    return total;
}

console.log(dietPlanPerformance([1, 2, 3, 4, 5], 2, 3, 3));
