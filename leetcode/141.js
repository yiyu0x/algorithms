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

var hasCycle = function(head) {
    let fast = head
    let slow = head

    while(fast) {
    	if (fast.next === null) return false
    	fast = fast.next.next
    	slow = slow.next
    	if (fast === slow) return true
    }

    return false
};

console.log(hasCycle())