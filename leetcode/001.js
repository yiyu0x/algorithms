var twoSum = function(nums, target) {
	let m = new Map()
	for (let i = 0; i < nums.length; i++) {
		let o = target - nums[i]
		if (m.has(o) && i !== m.get(o))
			return [i, m.get(o)].sort()
		m.set(nums[i], i)
	}
};