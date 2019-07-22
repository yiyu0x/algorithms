
arr = []
n = 5
front = 0
rear = 0

function enqueue(item) {
	if ((rear + 1) % n == front) {
		console.log("FULL!")
		return
	}
	arr[rear] = item
	rear = (rear + 1) % n
}

function dequeue() {
	if (front == rear) {
		console.log("EMPTY!")
		return
	}
	front = (front + 1) % n
}


function print() {
	console.log('output:')
	let curr = front
	while (curr != rear) {
		console.log(arr[curr])
		curr = (curr + 1) % n
	}
}

enqueue(1)
enqueue(3)
enqueue(2)
enqueue(4)
dequeue()
dequeue()
enqueue(5)
enqueue(7)
dequeue()
enqueue(9)
print()