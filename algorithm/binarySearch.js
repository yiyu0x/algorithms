
function createArray() {
	return Array.from(new Set(Array.from({length: 20}, (v,k) => Math.floor(Math.random()*(50))).sort((a, b) => {
		return a - b
	})))
}

function bSearch(arr, val, l = 0, r = arr.length) {
	let mid = Math.floor((l + r) / 2)
	
	if (l > r) return -1
	if (arr[mid] == val)
		return mid
	else if (val > arr[mid])
		return bSearch(arr, val, mid+1, r)
	else if (val < arr[mid])
		return bSearch(arr, val, l, mid-1)

}

for (let i = 0; i < 30; i++) {
	let box = createArray()
	let ran = Math.floor(Math.random() * 20)
	let pos = bSearch(box, ran)
	console.log(box)
	console.log('target is', ran, 'position is', pos)	
	if (pos == box.indexOf(ran)) console.log('🙆')
	else console.log('❌')
	console.log('-----')
}