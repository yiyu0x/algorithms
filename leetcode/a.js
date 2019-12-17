let x = (arr, t=0) => {
	if (t == 10)
		return
	arr.push(t)
	x(arr, t + 1)
}


let main = () => {
	let arr = [1, 2, 3]
	console.log(arr)
	x(arr)
	console.log(arr)
}

main()