function LinkList () {

	let head = null;

	const Node = function (value) {
		this.value = value;
		this.next;
	}

	this.append = function (value) {
		const node = new Node(value);
		let current;

		if ( head==null ) {
			head = node;
		} else {
			current = head;
			while ( current.next ) {
				current = current.next;
			}
			current.next = node;
		}
	}

	this.delete = function (value) {
		if ( !this.isEmpty() ) {
			
			//if target is head
			if ( head.value == value ) {
				head = head.next;
				return;
			}
			//if target is head.next
			if ( head.next.value == value ) {
				head.next = head.next.next;
				return;
			}
			//others
			let current = head.next;
			while ( current) {
				if ( current.next.value == value ) {
					current.next = current.next.next;
					return;
				}
				current = current.next;
			}

		}
	}

	this.isEmpty = function () {
		if ( head==null ) {
			console.log('LinkList is empty.')
			return true;
		} else {
			return false;
		}
	}

	this.print = function () {
		if ( !this.isEmpty() ) {
			let current = head;
			while ( current ) {
				console.log( current.value );
				current = current.next;
			}
		}
	}
}

// testing
// var ll = new LinkList();
// ll.append(1)
// ll.append(2)
// ll.append(3)
// ll.delete(3)
// ll.delete(2)
// ll.print()