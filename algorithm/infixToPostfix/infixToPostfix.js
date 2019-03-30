//
//
// 1. 遇到 ( 就丟進 stack
// 2. 遇到 ) 就把 stack 全部 pop 到 postfix 尾端 ， 直到 ( 也被 pop 完畢
// 3. 遇到 +, -, *, / 與 stack 頂端比優先權 ， 比較大就 push 進 stack
// 比較小就把 stack 頂端 pop 到 postfix ， 在把運算子 push 進 stack
// 4. 遇到運算元，直接接到 postfix 尾端
//	
//
function priority(op) {
	if (op == '*' || op == '/') {
		return 3
	} else if (op == '+' || op == '-') {
		return 2
	} else if (op == '(') {
		return 1
	}
}

function getPostfix(infix) {
	let stack = []
	let postfix = ''
	for (let i = 0; i < infix.length; i++) {
		if (infix[i] == '+' || infix[i] == '-' || infix[i] == '*' || infix[i] == '/'
			|| infix[i] == '(' || infix[i] == ')') {
			
			let top = stack.slice(-1)[0]
			if (infix[i] == '(') {
				stack.push(infix[i])
			}
			else if (infix[i] == ')') {
				while (top != '(') {
					postfix += top
					stack.pop()
					top = stack.slice(-1)[0] 
				}
				stack.pop()
			} else if (priority(infix[i]) > priority(top) || top == undefined) {
				stack.push(infix[i])
			} else {
				postfix += stack.pop()
				stack.push(infix[i])
			}
		} else {
			postfix += infix[i]
		}
	}
	while (stack.length != 0) {
		postfix += stack.pop()
	}
	return postfix
}
inFix = '((A+(B*C))-D)' // ABC*+D-
postFix = getPostfix(inFix)
console.log(postFix)
