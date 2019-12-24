function square(n) {
	return n * n
}

function is_divides(a, b) {
	return a % b === 0
}

function find_divisor(n, test_divisor) {
	return square(test_divisor) > n ?
		n : is_divides(n, test_divisor) ?
				test_divisor : find_divisor(n, test_divisor + 1)
}

function small_divisor(n) {
	return find_divisor(n, 2)
}

function is_prime(n) {
	return n === small_divisor(n)
}

function find_prime(n) {
	console.log(n, is_prime(n))
	return n === 0 ? 0 : find_prime(n - 1)
}


