function swap(arr, a, b) {
	let tmp = arr[a]
	arr[a] = arr[b]
	arr[b] = tmp
}
function heapify(arr, i) {
	let root  = i
	let left  = i * 2 + 1
	let right = i * 2 + 2

	let min = root
	if (arr[left] < arr[min] && left < arr.length) min = left
	if (arr[right] < arr[min] && right < arr.length) min = right

	if (arr[min] != arr[root]) {
		swap(arr, root, min) 
		heapify(arr, min)
	}

}

function pop(arr) {
	swap(arr, 0, arr.length - 1)
	arr.pop()
	for (let i = Math.floor(arr.length/2) - 1; i >= 0; i--)
		heapify(arr, i)
}
function smellestInArray(arr, k) {
	for (let i = Math.floor(arr.length/2) - 1; i >= 0; i--)
		heapify(arr, i)
	
	for (let i = 0; i < k - 1; i++) {
		pop(arr)
	}
	console.log(`${k} smellest is : ${arr[0]}`)
	// console.log(arr)
}

let arr = [ 26, 25, 32, 7, 18, 25, 30, 0, 29, 7, 8, 34, 5, 17, 40, 7, 20, 2, 25, 36 ]
//[ 0, 2, 5, 7, 7, 7, 8, 17, 18, 20, 25, 25, 25, 26, 29, 30, 32, 34, 36, 40 ]
smellestInArray(arr, 8)
// console.log(arr.sort((a, b) => a - b))