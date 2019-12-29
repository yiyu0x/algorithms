var numSquares = function(n) {
	if (n === 0) return 0
	let max = Number.MAX_SAFE_INTEGER
	let perfect = Array(n+1).fill(max)
	for (let i = 0; i * i <= n; i++)
		perfect[i*i] = 1

	// a + b*b
	for (let a = 1; a <= n; a++) {
		for (let b = 1; a + b*b <= n; b++) {
			if (a === 6 && b === 3) {
				// console.log(perfect[a]+1, perfect[a+b*b])
			}
			perfect[a+b*b] = Math.min(perfect[a]+1, perfect[a+b*b])
		}
	}
	// console.log(perfect)
	return perfect[n]
};


console.log(numSquares(15))