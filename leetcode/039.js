let d = (arr, curr, target, ans, res) => {
	if (curr > target) return
	if (curr === target) {
		res.push([...ans].sort())
		return 
	}
	for(let i = 0; i < arr.length; i++) {
		ans.push(arr[i])
		d(arr, curr + arr[i], target, ans, res)
		ans.pop()
	}
}

var combinationSum = function(candidates, target) {
	let res = []
	d(candidates, 0, target, [], res)
	let s = new Set(res.map(x => JSON.stringify(x)))
	res = Array.from(s).map(x => JSON.parse(x))
	return res
}

console.log(combinationSum([2,3,6,7], 7))