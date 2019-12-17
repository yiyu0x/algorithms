var minSubArrayLen = function(s, nums) {
    if (nums.length == 0) return 0
    let left = 0
    let right
    let sum = 0
    let size = nums.length + 1
    for(right = 0; right < nums.length; right++) {
    	sum += nums[right]
    	console.log(nums.slice(left, right + 1), sum)
    	while (sum >= s) {
    		if (right - left + 1 < size) 
    			size = right - left + 1
    		sum -= nums[left]
    		left++
    		console.log('shift left', nums.slice(left, right + 1), sum)
    	}
    }
    return size === nums.length + 1 ? 0 : size
};

console.log(minSubArrayLen(3, [1,1]))