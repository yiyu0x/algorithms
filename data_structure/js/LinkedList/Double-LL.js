class Node {
	constructor(value) {
		this.value = value
		this.next = null
		this.previous = null
	}
}

class DLL {
	constructor() {
		this.head = null
	}

	pushFront(value) {
		let node = new Node(value)
		if (this.head == null) {
			this.head = node
		} else {
			this.head.previous = node
			node.next = this.head
			this.head = node
		}
	}

	delete(value) {
		if (this.head == null) return
		else {
			if (this.head.value == value) {
				this.head = this.head.next
			} else {
				let tmp = this.head.next
				while (tmp != null) {
					if (tmp.value == value) {
						if (tmp.next == null) {
							tmp.previous.next = null
						} else {
							tmp.previous.next = tmp.next
							tmp.next.previous = tmp.previous
						}
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

}

let list = new DLL()
list.pushFront(3)
list.pushFront(4)
list.pushFront(8)
list.pushFront(5)
list.traversal()
list.delete(4)
list.traversal()
