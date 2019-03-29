function Stack() {

	let head = null;
	let length = 0;

	const Node = function (value) {
		this.value = value;
		this.next;
	}

	this.isEmpty = function () {
		if ( head==null ) {
			console.log('Stack is empty.')
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
			let current = head;
			let counter = 0;
			while ( current ) {
				counter++;
				if ( counter == length-1) {
					current.next = null;
					length--;
				}
				current = current.next;
			}
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

var s = new Stack();
s.push(1)
s.push(2)
s.push(3)
s.pop()
s.pop()
s.push(3)
s.print()