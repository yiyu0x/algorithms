function BinarySearchTree () {
	
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
			let left = current.left;
			let right = current.right;

			if ( value <= current.value ) {
				if ( !left ) {
					current.left = node;
				} else {
					this.add( value, left);
				}
			} else if ( value > current.value ) {
				if ( !right ) {
					current.right = node;
				} else {
					this.add( value, right);
				}
			}
		}
	}

	this.find = function (value ,current=head, parent=null) {

		while ( current ) {
			
			if ( current.value==value ) {
				return {current,parent};
			}

			if ( value>current.value ) {
				return this.find( value,current.right,current );
			} else {
				return this.find( value,current.left,current );
			}
		}
		return false
	}

	this.deleteHead = function () {

		if ( !head.left && !head.right ) {
			head = null;
		}	
		//only have left leaf 
		else if ( head.left && !head.right ) {
			head = head.left;
		}
		//only have right leaf
		else if ( !head.left && head.right ) {
			head = head.right;
		}	
		//have two leafs
		else if ( head.left && head.right ) {
			this.adjust(head, head.left);
		}

	}

	this.adjust = function (target, current, current_parent) {
		//find max on leaf || min on right
		if ( !current.right ) {
			target.value = current.value;
			current_parent.right = null;
			return;
		}
		return this.adjust(target, current.right, current);
	}

	this.delete = function (value) {

		if ( this.find(value) ) {

			if ( value==head.value ) {
				this.deleteHead();
				return
			}

			let target = this.find(value).current;
			let parent = this.find(value).parent;
			// console.log(parent.value)
			// console.log(target.value)
			let leafOnRight = (target.value>parent.value)?true:false;
			//not have any leaf

			if ( !target.left && !target.right ) {
				if ( leafOnRight ) {
					parent.right = null;
				} else {
					parent.left = null;
				}
			}	
			//only have left leaf 
			else if ( target.left && !target.right ) {
				if ( leafOnRight ) {
					parent.right = target.left;
				} else {
					parent.left = target.leftl;
				}
			}
			//only have right leaf
			else if ( !target.left && target.right ) {
				if ( leafOnRight ) {
					parent.right = target.right;
				} else {
					parent.left = target.right;
				}
			}
			//have two leafs
			else if ( target.left && target.right ) {
				//find max on leaf || min on right
				if ( !target.left.right ) {
					target.value = target.left.value;
					target.left = null;
				} else {
					this.adjust(target.left,target.left)				
				}
			}
		}

	}
	this.traversal_inorder = function (current=head) {
		if ( current ) {
			this.traversal_inorder(current.left)
			console.log(current.value);
			this.traversal_inorder(current.right)
		} 
	}

	this.traversal_preorder = function (current=head) {
		if ( current ) {
			console.log(current.value);
			this.traversal_inorder(current.left)
			this.traversal_inorder(current.right)
		} 
	}

	this.traversal_postorder = function (current=head) {
		if ( current ) {
			this.traversal_inorder(current.left)
			this.traversal_inorder(current.right)
			console.log(current.value);
		} 
	}
 
}
var b = new BinarySearchTree();
// for (let i=0;i<25;i++) {
	// let ran = Math.floor( Math.random()*50 + 1 );
	b.add(25);
	b.add(27);
	b.add(20);
	b.add(26);
	b.add(15);
	b.add(23);
	// b.add(ran);
	// b.add(ran);
	// b.add(ran);
	// b.add(ran);
	// b.add(ran);
	b.delete(25)

// }
// b.add(20)
b.traversal_inorder()
