//use Eratosthenes algorithtm to find primes
function prime (n) {
	let prime_table = Array.from(new Array(n+1), (val, index) => index );
	for (let i=2;i<=Math.sqrt(n);i++) {
		for (let j=i;j<n;j++) {
			let target = i*j
			delete prime_table[target]
		}
	}

	prime_table = prime_table.filter( (x)=>x) ;
	return prime_table
}

console.log(prime(100));