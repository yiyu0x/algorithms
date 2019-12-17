var sortedSquares = function(A) {
    
    let res = []
    let l_ptr = 0
    let r_ptr = A.length - 1
    while (l_ptr <= r_ptr) {
    	if (A[l_ptr] ** 2 < A[r_ptr] ** 2) {
    		res.unshift(A[r_ptr--] ** 2)
    	} else {
    		res.unshift(A[l_ptr++] ** 2)
    	}
    }
    return res
};

console.log(sortedSquares([-4,-1,0,3,10]))