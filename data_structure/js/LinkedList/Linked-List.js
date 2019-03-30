class Node {
	constructor(value) {
		this.value = value
		this.next = null
	}
}

class LL {
	constructor() {
		this.head = null
	}

	pushFront(value) {
		let node = new Node(value)
		if (this.head == null) {
			this.head = node
		} else {
			node.next = this.head
			this.head = node			
		}
	}

	pushRear(value) {
		let node = new Node(value)
		if (this.head == null) {
			this.head = node
		} else {
			let tmp = this.head
			while (tmp.next != null) {
				tmp = tmp.next
			}
			tmp.next = node
		}	
	}

	delete(value) {
		if (this.head == null) return
		else {
			if (this.head.value == value) {
				this.head = this.head.next
			} else {
				let tmp = this.head
				while (tmp.next != null) {
					if (tmp.next.value == value) {
						tmp.next = tmp.next.next
						break
					}
					tmp = tmp.next
				}
			}
		}
	}

	traversal() {
		let ans = ''
		if (this.head != null) {
			let tmp = this.head
			while (tmp != null) {
				ans += tmp.value.toString() + ' '
				tmp = tmp.next
			}
		}
		console.log(ans)
	}

	reverse() {
		if (this.head == null) return
		else {
			let previous = null
			let current = this.head
			let cNext = this.head.next
			while (cNext != null) {
				current.next = previous
				previous = current
				current = cNext
				cNext = cNext.next
			}
			current.next = previous
			this.head = current
		}
	}
}

let list = new LL()
list.pushFront(4)
list.pushFront(6)
list.pushFront(2)
list.pushRear(3)
list.pushRear(9)
list.pushFront(1)
list.pushRear(8)
list.delete(1)
list.delete(8)
list.delete(4)
list.traversal()
list.reverse()
list.traversal()
