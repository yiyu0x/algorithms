var numSubarrayProductLessThanK = function(nums, k) {
    let l = 0;
    let r = nums.length - 1;
    for(let i = 0; i < nums.length; i++) {
    	if (nums[i] < k) {
    		console.log(nums[i])
    	}
    }
};

console.log(numSubarrayProductLessThanK([10, 5, 2, 6], 100))