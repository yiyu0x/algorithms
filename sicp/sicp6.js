function sum(start, end, next, tern) {
	return start > end ? 0 : tern(start) + sum(next(start), end, next, tern)
}


function next(n) {
	return n + 1
}

function term(n) {
	return n * n
}

// console.log(sum(1, 5, next, term))

console.log(((a, b, c) => a + b + c)(1, 2, 5))

