function HashTable () {
	let hashtable = [];
	const Node = function (value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}

	this.getKey = function (value) {
		let key = 0;
		for (let i=0;i<value.length;i++) {
			key += value.charCodeAt(i);
		}
		return key%30;
	}

	this.add = function (value) {
		let key = this.getKey(value);
		if ( !hashtable[key] ) {
			hashtable[key] = new Node(value);
			// console.log(hashtable[key])
		} else {
			let current = hashtable[key];
			while ( current ) {
				if ( !current.next ) {
					current.next = new Node(value);
					return;
				}
				current = current.next;
			}
		}
	}

	this.delete = function (value) {
		let key = this.getKey(value);
		if ( hashtable[key] ) {
			let current = hashtable[key];
			if ( current.value==value ) {
				hashtable[key] = current.next;
				return;
			}
			while ( current.next ) {
				if ( current.next.value==value ) {
					if ( current.next.next ) {
						current.next = current.next.next;
						return;
					} else {
						current.next = null;
						return;
					}
				}
				current = current.next;
			}
		}
	}

	this.print = function () {
		for (let i=0;i<30;i++) {
			if ( hashtable[i]) {
				let current = hashtable[i];
				while ( current ) {
					console.log(current.value);
					current = current.next;
				}
				console.log()
			}
		}

	}
 
}


var h = new HashTable();
h.add('hello')
h.add('olleh')
h.add('hlleo')

h.add('js')
h.add('php')
h.delete('hlleo')
h.delete('olleh')
h.delete('hello')
h.print()

