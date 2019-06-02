let infixToPostfix = require('./infixToPostfix.js')
let eP = require('./evalPostfix.js')

infixBox = [
	'A/(B-C*D)',
	'1+(3*4)/2',
	'4+4-2*2',
	'1+(1+2+(2*3))-1'
]

infixBox.forEach(infix => {
	let postfix = infixToPostfix.getPostfix(infix)

	console.log('infix:  ', infix, '=', eval(infix))
	console.log('postfix:', postfix, '=', eP.evalPostfix(postfix))
	// if (eval(infix) == eP.evalPostfix(postfix)) console.log('🙆‍♂️')
	// else console.log('❌')
	console.log('--------')
})


console.log(eP.evalPostfix('793-2/42-*+'))