class Disjoint_set {

	constructor(vertexs) {
		this.nodes   = {}
		this.vertexs = vertexs
	}

	makeSet(vertex) {
		this.nodes[vertex] = [vertex]
	}

	union(nameA, nameB) {
		let parentNameA = this.getParent(nameA)
		let parentNameB = this.getParent(nameB)
		if (parentNameA != parentNameB) {
			this.nodes[parentNameA] = 
				this.nodes[parentNameA].concat(this.nodes[parentNameB])
			delete this.nodes[parentNameB]
		}
	}

	getParent(node) {
		for (const parent in this.nodes) {
			if (this.nodes[parent].includes(node)) {
				return parent
			}
		}
		return null
	}
}

vertexs = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
myDJS   = new Disjoint_set(vertexs)
vertexs.forEach((item) => {
	myDJS.makeSet(item)
})
myDJS.union('a', 'd')
myDJS.union('d', 'b')
myDJS.union('g', 'f')
myDJS.union('e', 'a')
console.log(myDJS.nodes)
