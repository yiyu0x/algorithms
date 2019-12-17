var twoSum = function(numbers, target) {
	let l_ptr = 0
	let r_ptr = numbers.length - 1
    while (l_ptr < r_ptr) {
    	if (numbers[l_ptr] + numbers[r_ptr] == target) {
    		return [l_ptr+1, r_ptr+1]
    	}
    	if (numbers[l_ptr] + numbers[r_ptr] > target) r_ptr--
    	else l_ptr++
    }
};
console.log(twoSum([2,7,11,15], 9))