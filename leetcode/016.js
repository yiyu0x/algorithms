let find_closest = (nums, l, r, target, i, closest) => {
	let res
	while(l < r) {
		let sum = nums[i] + nums[l] + nums[r]
		let tmp_closest = Math.abs(sum - target)
		if (tmp_closest < closest) {
			// console.log(nums[i], nums[l], nums[r], "sum:", sum)
			closest = tmp_closest
			res = sum
			if (sum === target) return [res, 0]
		}
		else if (sum > target) {
			r--
			if (r === i) r--
		}
		else if (sum < target) {
			l++
			if (l === i) l++
		}
	}
	return [res, closest]
}

var threeSumClosest = function(nums, target) {
 	nums = nums.sort((a, b) => a - b)
 	let l = 0
 	let r = nums.length - 1
 	let res_sum = 0
 	let closest = 99999999
 	// a + b + c ~~ target
 	// a + b ~~ target - c
	for(let i = 0; i < nums.length; i++) {
		if (i === l || i === r) continue
		[sum, tmp_closest] = find_closest(nums, l, r, target, i, closest)
		if (tmp_closest < closest) {
			closest = tmp_closest
			res_sum = sum
			if (sum === target) return sum
		}
	} 	
 	return res_sum
}

console.log(threeSumClosest([1,1,1,1], 3))