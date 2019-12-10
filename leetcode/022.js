let parenthesis_dfs = (l, r, ans, res) => {
	if (l > r) return
	if (l === 0 && r === 0) 
		res.push(ans)
	else {
		if (l > 0) parenthesis_dfs(l - 1, r, ans + '(', res)
		if (r > 0) parenthesis_dfs(l, r - 1, ans + ')', res)
	}
}

var generateParenthesis = function(n) {
	let res = []
	parenthesis_dfs(n, n, '', res)
	console.log(res)
};

generateParenthesis(3)
// describe('test data', function() {
// 	it('n = 3', done => {
// 		let res = generateParenthesis(3)
// 		let ans = [
// 			"((()))",
// 			"(()())",
// 			"(())()",
// 			"()(())",
// 			"()()()"
// 		]
// 		res.should.equal(ans)
// 		done()
// 	})
// });