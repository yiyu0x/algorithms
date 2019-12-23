let BFS = (curr, deadends, target, step) => {
	console.log(curr)
	if (curr === target) {
		console.log(step)
		return step
	}
	if (target.includes(curr)) return 

	let tmp = curr.split('').map((x) => parseInt(x))
	console.log('1:', tmp[0])
	console.log('2:', tmp[1])
	console.log('3:', tmp[2])
	console.log('4:', tmp[3])
	for(let i in tmp) {
		if (tmp[i] === -1) tmp[i] = 9
		if (tmp[i] === 10) tmp[i] = 0
	}
	
	let res = []
	// BFS(tmp.join(''), deadends, target, step + 1)
	for(let i in tmp) {
		// move up
		tmp[i] += 1
		res.push(BFS(tmp.join(''), deadends, target, step + 1))
		tmp[i] -= 1
		// move down
		tmp[i] -= 1
		res.push(BFS(tmp.join(''), deadends, target, step + 1))
		tmp[i] += 1
	}
	console.log(res)
}
var openLock = function(deadends, target) {
    let step = BFS("0000", deadends, target, 0)
    return step
};


console.log(openLock(["0201","0101","0102","1212","2002"], "1000"))