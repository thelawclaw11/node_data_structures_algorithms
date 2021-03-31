function fourSum(nums, target) {
    nums.sort((a, b) => a - b);

    const result = [];

    let a = 0;
    while (a < nums.length - 3) {
        // console.log(a);
        let b = a + 1;
        while (b < nums.length - 2) {
            //     console.log(b);
            let c = b + 1;
            let d = nums.length - 1;
            while (c < d) {
                //       console.log(c, d);
                const sum = nums[a] + nums[b] + nums[c] + nums[d];
                const cTemp = c;
                const dTemp = d;
                if (sum < target) {
                    while (c < d && nums[c] === nums[cTemp]) {
                        c++;
                    }
                } else if (sum > target) {
                    while (c < d && nums[d] === nums[dTemp]) {
                        d--;
                    }
                } else if (sum === target) {
                    result.push([nums[a], nums[b], nums[c], nums[d]]);

                    while (c < d && nums[c] === nums[cTemp]) {
                        c++;
                    }
                    while (c < d && nums[d] === nums[dTemp]) {
                        d--;
                    }
                }
            }

            const jTemp = b;
            while (nums[b] === nums[jTemp]) {
                b++;
            }
        }

        const iTemp = a;
        while (nums[a] === nums[iTemp]) {
            a++;
        }
    }
    return result;
}

console.log(fourSum([-2, -1, 0, 0, 0, 0, 1, 2], 0));
