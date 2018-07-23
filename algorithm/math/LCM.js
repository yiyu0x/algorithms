function LCM (m,n) {
	if ( m>n ) {
		let tmp = m;
		m = n;
		n = tmp;
	}

	for (let i=n;i<=m*n;i++) {
		if ( i%m==0 && i%n==0 ) {
			return i
		}
	}
}

console.log(LCM(10,25));