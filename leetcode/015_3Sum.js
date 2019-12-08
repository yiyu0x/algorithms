let x = function(nums) {
	nums.sort((x, y) => x - y)
	let res = []
	let mid, right
	for (let left = 0; left < nums.length; left++) {
		if(nums[left] == nums[left-1])
			continue
		mid = left + 1
		right = nums.length - 1
		let target = 0 - nums[left]
		while (mid < right) {
			if (nums[mid] + nums[right] === target) {
				res.push([nums[left], nums[mid], nums[right]])
				mid++
				right--
			} else if (nums[mid] + nums[right] > target) {
				right--;
			} else {
				mid++;
			}
		}
	}
	return Array.from(
		new Set(res.map((x) => JSON.stringify(x)))).map((x) => JSON.parse(x)
	).sort((x, y) => x[0] - y[0])
}

console.log(x([-1, 0, 1, 2, -1, -4]))
console.log(x([-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6]))