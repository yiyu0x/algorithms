function evalPostfix(postfix) {
	let stack = []
	for (let i = 0; i < postfix.length; i++) {
		if (Number(postfix[i])) {
			stack.push(postfix[i])
		} else {
			let b = stack.pop()
			let a = stack.pop()
			stack.push(eval(a + postfix[i]+ b).toString())
		}
	}
	return stack.pop()
}

module.exports = {
	evalPostfix: evalPostfix
}