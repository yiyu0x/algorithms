function exp(n, m) {
	
	function is_even(n) {
		return n % 2 === 0
	}
	function square(n) {
		return n * n
	}

	return m === 0 ? 1 : is_even(m) ? square(exp(n, m/2), 2) : n * exp(n, m - 1)
}

// console.log(exp(10, 4))

function GCD() {
	
}