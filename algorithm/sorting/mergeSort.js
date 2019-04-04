function merge(left, right) {

	let result = []
	let indexL = 0, indexR = 0
	while (indexL < left.length && indexR < right.length) {
		if (left[indexL] < right[indexR]) {
			result.push(left[indexL])
			indexL ++
		} else {
			result.push(right[indexR])
			indexR ++
		}
	}
	return result.concat(left.splice(indexL).concat(right.splice(indexR)))
}

function mergeSort(arr) {
	if (arr.length == 1) return arr
	let mid = Math.floor(arr.length / 2)
	let left = arr.slice(0, mid)
	let right = arr.slice(mid)

	return merge(mergeSort(left), mergeSort(right))
}
 


let box = Array.from({length: 20}, () => Math.floor(Math.random() * 40))
console.log('original array:', box)
let boxSorted = mergeSort(box)
console.log('sorted   array:', boxSorted)