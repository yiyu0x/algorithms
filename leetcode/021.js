function ListNode(val) {
    this.val = val;
    this.next = null;
}

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
var mergeTwoLists = function(l1, l2) {
	if (l1 === null) return l2
	if (l2 === null) return l1
    let new_head = null
    let curr
    while (l1 && l2) {
    	if (l1.val <= l2.val) {
    		if (new_head === null) {
    			new_head = new ListNode(l1.val)
    			l1 = l1.next
    			curr = new_head
    		} else {
	    		curr.next = new ListNode(l1.val)
	    		l1 = l1.next
	    		curr = curr.next
	    	}
    	} else {
    		if (new_head === null) {
    			new_head = new ListNode(l2.val)
    			l2 = l2.next
    			curr = new_head
    		} else {
    			curr.next = new ListNode(l2.val)
	    		l2 = l2.next
	    		curr = curr.next
    		}
    	}
    }
	while(l1) {
		curr.next = new ListNode(l1.val)
		curr = curr.next
		l1 = l1.next
	}
	while(l2) {
		curr.next = new ListNode(l2.val)
		curr = curr.next
		l2 = l2.next
	}
    return new_head
};

let l1 = new ListNode(1)
l1.next = new ListNode(2)
l1.next.next = new ListNode(4)
let l2 = new ListNode(1)
l2.next = new ListNode(3)
l2.next.next = new ListNode(4)
print(mergeTwoLists(l1, l2))

