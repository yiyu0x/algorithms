//ref:https://www.qiujiawei.com/redblacktree-2/
//this code not working ( just practice how to implement )
const Node = function (value) {
	this.value = value;
	this.color = 'red';
	this.left = null;
	this.right = null;
}
function RBT () {

	this.head = null;

	this.findParent = function (target,current=this.head) {

		if ( current ) {
			if ( current.left ) {
				if ( current.left.value == target ) return current;	
				if ( this.findParent(target, current.left) ) { 
					return this.findParent(target, current.left);
				}
			}

			if ( current.right ) {
				if ( current.right.value == target ) return current;
				if ( this.findParent(target, current.right) ) {
					return this.findParent(target, current.right);
				}
			}

			return false;
		}

	}
	this.LL = function (current,father,uncle) {
		let pivot = this.findParent(father.value);
		let pivot_next = pivot.left;
		let tmp = pivot_next.right;
		pivot_next.right = pivot;
		pivot.left = tmp;
		pivot.color = 'red';
		pivot_next.color = 'black';
		//connect
		if ( pivot==this.head ) {
			this.head = pivot_next;
		} else {
			let pivotParent = this.findParent(pivot.value);
			if ( pivotParent.left==pivot ) {
				pivotParent.left = pivot_next;
			}
		}
	}
	this.RR = function (current,father,uncle) {
		let pivot = this.findParent(father.value);
		let pivot_next = pivot.right;
		let tmp = pivot_next.left;
		pivot_next.left = pivot;
		pivot.right = tmp;
		pivot.color = 'red';
		pivot_next.color = 'black';
		//connect
		if ( pivot==this.head ) {
			this.head = pivot_next;
		} else {
			let pivotParent = this.findParent(pivot.value);
			if ( pivotParent.left==pivot ) {
				pivotParent.left = pivot_next;
			}
		}
	}
	this.LR = function (current,father,uncle) {
		// rotate to LL
		let pivot = this.findParent(father.value);
		pivot.left = current;
		current.left = father;
		father.right = null;
		// do LL
		this.LL(father,current,uncle);
	}
	this.RL = function (current,father,uncle) {
		// rotate to RR
		let pivot = this.findParent(father.value);
		pivot.right = current;
		current.right = father;
		father.left = null;
		// do RR
		this.RR(father,current,uncle);
	}	

	this.findType = function (current,father,uncle) {
		if ( father.value <= uncle.value && current.value <= father.value ) return 1;
		if ( father.value > uncle.value && current.value > father.value ) return 2;
		if ( father.value <= uncle.value && current.value > father.value ) return 3;
		if ( father.value > uncle.value && current.value <= father.value ) return 4;
	}
	this.rotate = function (current,father,uncle) {
		switch ( this.findType(current,father,uncle) ) {
			//LL
			case 1:
				this.LL(current,father,uncle);
				console.log(1)
				break;
			//RR
			case 2:
				this.RR(current,father,uncle);
				console.log(2)
				break;
			case 3:
			//LR
				this.LR();
				console.log(3)
				break;
			case 4:
			//RL
				this.RL();
				console.log(4)
				break;
		}
			
	}
	this.recolor = function (current) {
		if ( current.value==13 ) {
			console.log(current.value)
		}
		let father = this.findParent(current.value);
		// console.log(father.value)
		let grandfather = this.findParent( this.findParent(current.value).value );
		// console.log(grandfather.value)
		let uncle = null;
		if ( grandfather.left && grandfather.right ) {
			uncle = (grandfather.left==father) ? grandfather.right:grandfather.left;
		}
		if ( grandfather==this.head && !uncle ) {
			father.color = 'black';
			return;
		}
		//in this function , father's color already knew as red .
		let flag = 1;
		// console.log(father.value)
		while ( father!=this.head && father.color=='red' ) {
			
			// let father = this.findParent(current.value);
			// let grandfather = this.findParent( this.findParent(current.value).value );
			// console.log(uncle.value)
			if ( uncle && uncle.color == 'black' ) {
				console.log('bb')
				this.rotate(current,father,uncle);
				return
			}else if ( uncle && uncle.color == 'red') {
				console.log('rr')
				uncle.color = 'black';
				if ( this.findParent( father.value )!=this.head )
					this.findParent( father.value ).color = 'red';
			}

			//coloring
			flag++;
			if ( flag%2==0 ) {
				father.color = 'black';
			} else {
				father.color = 'red';
			}
			console.log(current.color)
			console.log(father.color)
			console.log(uncle.color)
			//iterative
			father = this.findParent( father.value );
			if ( grandfather.left && grandfather.right ) {
				uncle = (grandfather.left==father) ? grandfather.right:grandfather.left;
			}
		}
		father.color = 'black';
	}

	this.insert = function (node,current=this.head) {
		
		if ( !this.head ) {
			this.head = node;
			this.head.color = 'black';
			return;
		}
		// console.log(node.value)
		if ( current ) {
			if ( !current.left && node.value <= current.value ) {
				current.left = node;
				if ( current.color == 'red' ) this.recolor(node);
				return;
			} else if ( !current.right && node.value > current.value ) {
				current.right = node;
				if ( current.color == 'red' ) this.recolor(node);
				return;
			} 
			if ( node.value <= current.value) this.insert( node, current.left );
			else this.insert( node, current.right );

		}


	}
}

var r = new RBT();
r.insert(new Node(23));
r.insert(new Node(16));
r.insert(new Node(29));
r.insert(new Node(12));
r.insert(new Node(18));
r.insert(new Node(26));
r.insert(new Node(32));
r.insert(new Node(13));
// r.insert(new Node(30));
// r.insert(new Node(49));
// console.log(r.head);
console.log();
console.log(r.head);
console.log()
// console.log(r.head.left.left);