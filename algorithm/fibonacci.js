function fib_dp (n) {
	let table = [1,1];
	let result = 0;
	for (let i=2;i<n;i++) {
		table[i] = table[i-1] + table[i-2];
		result = table[i];
	}
	return result;
}

function fib_rec (n) {
	if ( n<2 ) return n;
	return fib_rec(n-1)+fib_rec(n-2);
}

console.log(fib_dp(10))
console.log(fib_rec(10))