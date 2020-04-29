const get_ans = (BOARD_SIZE, queens) => {
	let line
	const result = []
	for(let row = 0; row < BOARD_SIZE; row++) {
		line = ''
		for(let col = 0; col < BOARD_SIZE; col++) {
			if (queens[row] === col)
				line += 'Q'
			else 
				line += '.'
		}
		result.push(line)
	}
	return result
}


const can_set = (row, col, queens) => {
	for(let i = 0; i < row; i++) 
		if (queens[i] === col || row - i === col - queens[i] || row - i === queens[i] - col) 
			return false
	return true
}
const set_queen = (board, row, size, queens, ans) => {
	if (row === size) {
		const res = get_ans(size, queens)
		ans.push(res)
	} else {
		for (let col = 0; col < size; col++) {
			if (can_set(row, col, queens)) {
				queens[row] = col
				board[row][col] = 'Q'
				set_queen(board, row + 1, size, queens, ans)
			}
		}
	}
}

var solveNQueens = function(n) {
	const ans = []
    const board = Array.from(Array(n), () => new Array(n).fill('.'))
    const queens = Array(n).fill(0)
    const res = set_queen(board, 0, n, queens, ans)
    return ans
};

console.log(solveNQueens(4))