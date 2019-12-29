var openLock = function(deadends, target) {
    let visited = ['0000'] // start point.
    let queue = ['0000']
    let res = 0
    while (queue.length) {
    	let size = queue.length
    	while (size-- > 0) {
	    	let curr = queue.shift()
	    	if (curr === target) return res
    		if (deadends.includes(curr)) return -1
	    	for (let i = 0; i < 4; i++) {
	    		for (let dir of [1, -1]) {
		    		let curr_int = curr.split('').map(x => parseInt(x))
		    		curr_int[i] = curr_int[i] + dir
		    		if (curr_int[i] === 10) curr_int[i] = 0
	    			if (curr_int[i] === -1) curr_int[i] = 9
		    		let curr_str = curr_int.join('')
		    		if (deadends.includes(curr_str) || visited.includes(curr_str)) continue
	    			queue.push(curr_str)
	    			visited.push(curr_str)
		    	}
	    	}
		}
		res++
    }
    return -1
};


console.log(openLock(["0201","0101","0102","1212","2002"], "0202"))
// console.log(openLock(["8888"], "0009"))
// console.log(openLock(["0000"], "0009"))