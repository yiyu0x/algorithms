function quickSort(arr, l=0, r=arr.length-1) {

	if (l >= r) return
	let i = l, j = r
	let pivot = arr[l]
	while (i != j) {
		//順序重要 先檢查 r 再檢查 i, r 往前跳與 l 重疊，不符合 i < j, 否則 i 會多算一格造成錯誤
		while (arr[j] > pivot && i < j) j--
		while (arr[i] <= pivot && i < j) i++
		if (i < j) {
			let tmp = arr[i]
			arr[i] = arr[j]
			arr[j] = tmp
		}
	}
	arr[l] = arr[i]
	arr[i] = pivot
	quickSort(arr, l, i - 1)
	quickSort(arr, i + 1, r)
}

let box = Array.from({length: 20}, () => Math.floor(Math.random() * 40))
console.log('original array:', box)
quickSort(box)
console.log('sorted   array:', box)