
function partition_dp(n) {
	let table = [];
	for (let i=0;i<=n;i++){
		table[i] = [];
		for (let j=0;j<=n;j++){
			table[i][j] = [];
		}
	}

	for (let i=1;i<=n;i++) {
		for (let j=1;j<=i;j++) {

			if ( i==1||j==1 ) {
				table[i][j] = 1;
			}
			else {

				if ( i==j ) {
					table[i][j] = table[i][j-1]+1;
				}
				else if ( (i-j)<j ) {
					table[i][j] = table[i-j][i-j] + table[i][j-1];
				}
				else {
					table[i][j] = table[i-j][j] + table[i][j-1];	
				}
			}
		}
	}
	return table[n][n];
}

function partition_rec(n,m) {
    if ( n == 1 || m == 1 )
        return 1;

    if ( n==m )
    	return 1+partition_rec(n,n-1);
    
    if ( n>m )
        return partition_rec(n-m,m)+partition_rec(n,m-1);

    if ( n<m )
        return partition_rec(n,n);
}

let n = 5
console.log(partition_rec(n,n));
console.log(partition_dp(n,n));
