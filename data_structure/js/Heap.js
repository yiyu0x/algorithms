function Heap () {
	
	let head = null;
	let id_counter = 0;
	let tmp = null;
	const Node = function (value,counter) {
		this.value = value;
		this.left = null;
		this.right = null;
		this.id = counter;
	}

	this.insert = function (node,current=head) {
		if ( !current.left ) current.left = node;
		else if ( !current.right ) current.right = node;
		else {
			let left = current.left;
			let right = current.right;
			if ( !left.left || !left.right ) {
				this.insert(node,left);
			} else {
				this.insert(node,right);
			}
		}
	}

	this.add = function (value) {
		id_counter++;
		let node = new Node(value,id_counter)
		if ( !head ) {
			head = node;
		} else {
			this.insert(node);
		}

		this.toHeap();
	}	


	//find node with id
	this.find = function ( id, current=head) {
		if ( current ) {
			
			if ( current.id==id ) {
				return current;
			}
			if ( this.find(id, current.left) ) {
				return this.find( id, current.left )
			}
			if ( this.find(id, current.right) ) {
				return this.find( id, current.right )
			}

			return false
		}

	}

	this.swap = function (nodeA, nodeB) {
		// console.log('im swap',nodeA.value,nodeB.value)
		let nodeTmp = nodeA.value;
		nodeA.value = nodeB.value;
		nodeB.value = nodeTmp;
	}
	this.minHeap = function ( node ) {
		// console.log(node)
		let minNode;
		if ( node ) {
			// console.log('id',node.id)
			if ( node.left ) {
				if ( node.left.value < node.value ) {
					// console.log('swap',node.left.value,node.value)
					this.swap(node.left,node);
					minNode = node.left
				} else {
					minNode = node;
				}
			}

			if ( node.right) {
				if ( node.right.value < node.value ) {
					// console.log('swap',node.right.value,node.value)
					this.swap(node.right,node);
					minNode = node.right
				} else {
					minNode = node;
				}
			}
			// if changed
			if ( minNode != node ) {
				this.minHeap( minNode )
			}
		}
	}

	this.toHeap = function () {
		if ( id_counter < 2 ) return;
		let node_id = Math.floor(id_counter/2);

		for (let i=node_id; i>=1; i--) {
			console.log('i',i)
			this.minHeap(this.find(i));
		}
	}

	this.traversal = function () {
		console.log('    ',head.value)
		console.log('  ',head.left.value,'  ',head.right.value)
		console.log('',head.left.left.value,'',head.left.right.value,'',
					head.right.left.value,'',head.right.right.value)
	}
 
}
var h = new Heap();
for (let i=0;i<7;i++) {
	let ran = Math.floor( Math.random()*50 + 1 );
	h.add(ran)
}
// h.add(5)
// h.add(22)
// h.add(21)
// h.add(39)
// h.add(27)
// h.add(6)
// h.add(13)

// h.find(5)
// h.find(5)
// var v = h.find(3);
// console.log(v)
h.traversal()
