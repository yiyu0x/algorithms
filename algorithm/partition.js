function pratition(n,m) {
    if ( n == 1 || m == 1 )
        return 1;

    if ( n==m )
    	return 1+pratition(n,n-1);
    
    if ( n>m )
        return pratition(n-m,m)+pratition(n,m-1);

    if ( n<m )
        return pratition(n,n);
}

let n = 8
console.log(pratition(n,n));
