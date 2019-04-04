
function selectionSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		let j, min = arr[i], index = i
		for (j = i; j < arr.length; j++) {
			if (arr[j] < min) {
				min = arr[j]
				index = j
			}
		}
		let tmp = arr[i]
		arr[i] = arr[index]
		arr[index] = tmp
	}
}

let box = Array.from({length: 20}, () => Math.floor(Math.random() * 40))
console.log('original array:', box)
selectionSort(box)
console.log('sorted   array:', box)
// console.log(box)