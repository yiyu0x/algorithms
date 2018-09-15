function completeBinaryTree () {
	
	let head = null;
	const Node = function (value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}

	this.add = function (value,current=head) {
		let node = new Node(value);
		if ( !head ) {
			head = node;
		} else {

			if ( !current.left ) current.left = node;
			else if ( !current.right ) current.right = node;
			else {
				let left = current.left;
				let right = current.right;
				if ( !left.left || !left.right ) {
					this.add(value,left);
				} else {
					this.add(value,right);
				}
			}
		}
	}

	this.traversal = function () {
		console.log(head.value)
		console.log(head.left.value)
		console.log(head.right.value)
		console.log(head.left.left.value)
		console.log(head.left.right.value)
	}
 
}
var b = new completeBinaryTree();
for (let i=0;i<5;i++) {
	// let ran = Math.floor( Math.random()*50 + 1 );
	let ran = i;
	b.add(ran);
}
b.traversal()