function swap(arr, a, b) {
	let tmp = arr[a]
	arr[a] = arr[b]
	arr[b] = tmp
}
function heapify(arr, node_index, len) {
	let leftChild_index = node_index * 2 + 1
	let rightChild_index = node_index * 2 + 2

	let max_index = node_index
	
	// find index of max node in current status
	if (arr[leftChild_index] > arr[max_index] && leftChild_index < len) {
		max_index = leftChild_index
	}
	if (arr[rightChild_index] > arr[max_index] && leftChild_index < len) {
		max_index = rightChild_index
	}

	if (max_index != node_index) {
		swap(arr, node_index, max_index)
		// now, max_index is not max, it is node_index
		heapify(arr, max_index, len)
	}
}

function heapSort(arr) {
	// build a Max-heap
	for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
		heapify(arr, i, arr.length)
	}
	// sort
	for (let i = arr.length - 1; i > 0; i--) {
		swap(arr, 0, i)
		heapify(arr, 0, i) // top-down
	}

}

// let box = Array.from({length: 20}, () => Math.floor(Math.random() * 40))
let box = [ 24, 28, 13, 37, 23, 13, 29, 1, 17 ]
console.log('original array:', box)
heapSort(box)
console.log('sorted   array:', box)

