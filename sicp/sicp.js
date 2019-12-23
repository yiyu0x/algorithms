function abs(x) {
	return x >= 0 ? x : -x
}
function square(x) {
	return x * x
}
function avg(x, y) {
	return (x + y) / 2
}
function sqrt(x) {
	function good_enough(guess) {
		return abs(square(guess) - x) < 0.001
	}
	function sqrt_iter(guess) {
		return good_enough(guess, x) ? 
				guess : sqrt_iter(avg(guess, x/guess), x)
	}
	return sqrt_iter(1)
}

// console.log(square(sqrt(7)))
function factorial(n) {
	return n === 1 ? 1 : n * factorial(n - 1)
}

// console.log(factorial(6))

function factorial2(n) {
	// function factorial_iter(1) {
	function factorial_iter(product, counter, max_count) {
		// console.log(counter)
 		return counter === max_count ? product * counter: factorial_iter(product * counter, counter + 1, max_count)
	}

	return factorial_iter(1, 1, n)
}

// console.log(factorial2(3))

function fib(n) {
	function fib_iter(a, b, counter) {
		return counter ? fib_iter(b, a + b, counter - 1) : b
	}
	return fib_iter(1, 0, n)
}
// 1 1 2 3 5 8 13
console.log(fib(7))