let swap = (arr, a, b) => {
	let tmp = arr[a]
	arr[a] = arr[b]
	arr[b] = tmp
}

var sortColors = function(nums) {
    let zero_ptr = 0
    let two_ptr = nums.length - 1
    let curr = 0

    while(curr <= two_ptr) {
    	// console.log(nums)
    	if (nums[curr] == 1) {
    		curr++
    	} else if (nums[curr] == 0) {
    		swap(nums, zero_ptr++, curr++)
    	} else if (nums[curr] == 2) {
    		swap(nums, two_ptr--, curr)
    	}
    }
    return nums
}

console.log(sortColors([2,0,1]))