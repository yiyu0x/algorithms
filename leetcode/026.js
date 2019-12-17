var removeDuplicates = function(nums) {
    let index = 0
    for(let i = 0; i < nums.length; i++) {
    	if (nums[index] != nums[i]) {
    		nums[++index] = nums[i]
    	}
    }
    return index + 1
};

console.log(removeDuplicates([1,1,2]))