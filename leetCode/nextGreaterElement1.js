const nextGreaterElement = (nums1, nums2) => {
    const stack = [];
    const map = {};

    for (let i = 0; i < nums2.length; i++) {
        while (stack.length > 0 && nums2[i] > stack[stack.length - 1]) {
            map[stack.pop()] = nums2[i];
        }
        stack.push(nums2[i]);
    }

    while (stack.length > 0) {
        map[stack.pop()] = -1;
    }

    const result = [];
    for (const num of nums1) {
        result.push(map[num]);
    }

    return result;
};

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));

const mk1 = (nums1, nums2) => {
    const result = [];

    for (let i = 0; i < nums1.length; i++) {
        const target = nums1[i];

        const targetIndex = nums2.indexOf(target);

        let nextGreater = -1;

        for (let j = targetIndex + 1; j < nums2.length; j++) {
            if (nums2[j] > target) {
                nextGreater = nums2[j];
                break;
            }
        }
        result.push(nextGreater);
    }
    return result;
};
