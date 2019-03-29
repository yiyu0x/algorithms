class Queue {
	constructor(size) {
		this.size = size
		this.array = []
		this.front = -1
		this.rear = -1
	}

	isEmpty() {
		return this.front == this.rear	
	}

	isFull() {
		return (this.rear + 1) % this.size == this.front
	}

	enQueue(item) {
		if (!this.isFull()) {
			this.rear = (this.rear + 1) % this.size
			this.array[this.rear] = item
		}
	}

	deQueue() {
		if (!this.isEmpty()) {
			this.front = (this.front + 1) % this.size
			console.log('deQueue: ', this.array[this.front])
		}
	}

	print() {
		let f = this.front
		let r = this.rear

		while (f % this.size != r) {
			console.log(this.array[f + 1])
			f += 1
		}
	}

}

let q = new Queue(7)
q.enQueue(4)
q.enQueue(6)
q.deQueue()
q.enQueue(7)
q.enQueue(8)
q.enQueue(3)
q.enQueue(4)
q.enQueue(5)
q.print()