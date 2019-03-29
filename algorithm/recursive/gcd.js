function gcd(m, n) {
	if (m % n == 0) return n
	return gcd(n, m%n)
}

console.log(gcd(32, 48))