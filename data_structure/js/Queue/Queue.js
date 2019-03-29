function Queue() {

	let head = null;
	let length = 0;

	const Node = function (value) {
		this.value = value;
		this.next;
	}

	this.isEmpty = function () {
		if ( head==null ) {
			console.log('Queue is empty.')
			return true;
		} else {
			return false;
		}
	}

	this.push = function (value) {
		const node = new Node(value);
		let current;

		if ( head==null ) {
			head = node;
			length = 1;
		} else {
			current = head;
			while ( current.next ) {
				current = current.next;
			}
			current.next = node;
			length++;
		}
	}

	this.pop = function () {
		
		if ( !this.isEmpty() ) {
			head = head.next;
			length--;
		}

	}

	this.print = function () {
		if ( !this.isEmpty() ) {
			let current = head;
			while ( current ) {
				console.log( current.value );
				current = current.next;
			}
			console.log('length is : ',length);
		}
	}
}

var q = new Quene();
q.push(1)
q.push(2)
q.push(3)
q.pop()
q.pop()
q.push(3)
q.print()