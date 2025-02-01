function a(nums, target) {
    for (i in nums) {
        for (j in nums) {
            if (j !== i) {
                console.log("----------------------------");
                console.log("i: ", nums[i]);
                console.log("j: ", nums[j]);
                console.log("result: ", nums[i] + nums[j]);
                if (nums[i] + nums[j] === target) {
                    return [Number(i), Number(j)];
                }
            }
        }
    }
};

console.log(a([-500000000,2,4,-500000000], -1000000000));