function fac_dp (n) {
	let result = 1;
	for (let i=2;i<=n;i++) {
		result *= i;
	}
	return result;
}

function fac_rec (n) {
	if ( n==1 ) return 1;
	return fac_rec(n-1)*n;
}
console.log(fac_dp(5))
console.log(fac_dp(5))

