var totalFruit = function(tree) {
    let left = 0
    let right
    let set = new Set()
    let diff_fruits = 0
    let max = 0
    let counter = 0
    for(right = left; right < tree.length; right++){
    	if (!set.has(tree[right])) {
    		set.add(tree[right])
    		diff_fruits += 1
    		if (diff_fruits === 3) {
    			let diff = new Set(tree.slice(left, right + 1))
    			while([...diff].length === 3) {
//    				console.log('debug:', tree.slice(left, right + 1))
    				set.delete(tree[left])
    				counter -= 1
    				left++
    				diff = new Set(tree.slice(left, right + 1))
    			}
    			diff_fruits = 2
    		}
    	}
    	counter += 1
		max = Math.max(max, counter)
		// console.log(tree.slice(left, right+1), set, diff_fruits)
    }

    return max
}


console.log(totalFruit([1,2,3,2,2]))