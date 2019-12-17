let print = (node) => {
	let tmp = node
	let res = ''
	while(tmp) {
		res += tmp.val + '->'
		tmp = tmp.next
	}
	res += 'null'
	console.log(res)
}

var swapPairs = function(head) {
	if (!head) return null
	if (!head.next)
		return head

	let curr = head
	while (curr) {
		if (curr.next) {
			let tmp = curr.val
			curr.val = curr.next.val
			curr.next.val = tmp
			curr = curr.next.next
		} else break		
	}
	return head
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

let l = new ListNode(1)
l.next = new ListNode(2)
l.next.next = new ListNode(3)
l.next.next.next = new ListNode(4)

swapPairs(l)