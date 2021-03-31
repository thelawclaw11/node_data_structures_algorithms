function removeDuplicates(nums) {
    let x = 0;
    let current = null;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === current) {
        } else {
            nums[x] = nums[i];
            current = nums[i];
            x++;
        }
    }
    //console.log(nums);

    return x;
}

const array = [0, 0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

//console.log(removeDuplicates(array));
console.log();

/*const array = [1, 2];

console.log(removeDuplicates(array));*/
