
function ListNode(val) {
	this.val = val;
	this.next = null;
}

let head                 = new ListNode(1)
head.next                = new ListNode(2)
head.next.next           = new ListNode(3)
head.next.next.next      = new ListNode(4)
head.next.next.next.next = new ListNode(5)
// head.next.next.next.next.next = new ListNode(6)

var middleNode = function(head) {
	if (head === null) return null
	let fast = head
	let slow = head
	while (true) {
		if (fast.next === null) {
			return slow
		} 

		if (fast.next.next === null) {
			return slow.next
		}
		fast = fast.next.next
		slow = slow.next
	}
};


console.log(middleNode(head))