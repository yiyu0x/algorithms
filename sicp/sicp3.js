function exp(n, m) {
	function exp_iter(n, m, counter, res) {
		return counter === m ? res : exp_iter(n, m, counter + 1, res * n)
	}

	// linear recustion
	// return m === 0 ? 1 : n * exp(n, m - 1)

	// tail-recusion (iterative recusion)
	// return exp_iter(n, m, 0, 1)
	
}

console.log(exp(2, 900))