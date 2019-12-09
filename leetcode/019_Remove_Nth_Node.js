function ListNode(val) {
 	this.val = val;
 	this.next = null;
}

let a = new ListNode(1)
a.next = new ListNode(2)
a.next.next = new ListNode(3)
// a.next.next.next = new ListNode(4)
// a.next.next.next.next = new ListNode(5)
// a.next.next.next.next.next = new ListNode(6)

let removeNthFromEnd = function(head, n) {
	if (head.next === null) return null
	let first_ptr = head
	let second_ptr
	let tmp = head
	let counter = 0
	// if n === 1, remove last node.
	if (n === 1) {
		while(tmp.next.next) tmp = tmp.next
		tmp.next = tmp.next.next
		return head
	}
	// in other situation , setting second pointer.
	while(tmp) {
		if (counter === n) {
			second_ptr = tmp
			break
		}
		tmp = tmp.next
		counter += 1
	}
	// moving two pointer , until the second pointer is pointer to null
	let prev
	while(second_ptr) {
		prev = first_ptr
		first_ptr = first_ptr.next
		second_ptr = second_ptr.next
	}

	if (first_ptr === head)
		head = head.next
	else 
		prev.next = prev.next.next
	
	return head
}

let print = (head) => {
	let res = ''
	let tmp = head;
	while(tmp) {
		res += tmp.val + '->'
		tmp = tmp.next
	}
	console.log(res + 'null')
} 
print(a)
console.log()
print(removeNthFromEnd(a, 2))
