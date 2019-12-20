var numSubarrayProductLessThanK = function(nums, k) {
    if (k === 0) return 0
    let l = 0
    let r = 0
    let product = 1
    let counter = 0
    for(r = l; r < nums.length; r++) {
    	product *= nums[r]
    	while (product >= k) {
    		product /= nums[l]
    		l++
    	}
        // add window size can get sub-array mount
    	counter += r - l + 1
        // console.log(nums.slice(l, r + 1), r-l+1) 
    }
    return counter
}

console.log(numSubarrayProductLessThanK([10, 5, 2, 6], 100))