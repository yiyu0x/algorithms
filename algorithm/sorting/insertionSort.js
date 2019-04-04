function insertionSort(arr) {
	for (let i = 1; i < arr.length; i++) {
		let j, now = arr[i]
		for (j = i - 1; j >= 0 && arr[j] > now; j--) 
			arr[j+1] = arr[j]
		arr[j + 1] = now
	}
}


let box = Array.from({length: 20}, () => Math.floor(Math.random() * 40))
console.log('original array:', box)
insertionSort(box)
console.log('sorted   array:', box)