
function GCD_rec (m,n) {
	return (n==0)? m : GCD_rec(n,m%n);
}

function GCD (m,n) {
	while ( n ) {
		let r = m%n;
		m = n;
		n = r;
	}
	return m;
}

console.log(GCD(10,15))
console.log(GCD_rec(10,15))