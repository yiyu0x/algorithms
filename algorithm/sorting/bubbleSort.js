function bubbleSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		let flag = false
		for (let j = 0; j < arr.length - i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
				flag = true
			}
		}
		if (flag == false) break
	}
}

let box = Array.from({length: 20}, () => Math.floor(Math.random() * 40))
console.log('original array:', box)
bubbleSort(box)
console.log('sorted   array:', box)