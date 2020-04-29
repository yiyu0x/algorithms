const board = [[".", ".", "9", "7", "4", "8", ".", ".", "."], ["7", ".", ".", ".", ".", ".", ".", ".", "."], [".", "2", ".", "1", ".", "9", ".", ".", "."], [".", ".", "7", ".", ".", ".", "2", "4", "."], [".", "6", "4", ".", "1", ".", "5", "9", "."], [".", "9", "8", ".", ".", ".", "3", ".", "."], [".", ".", ".", "8", ".", "3", ".", "2", "."], [".", ".", ".", ".", ".", ".", ".", ".", "6"], [".", ".", ".", "2", "7", "5", "9", ".", "."]]

let row = Array.from(Array(9), () => new Array(10).fill(0))
let col = Array.from(Array(9), () => new Array(10).fill(0))
let box = Array.from(Array(9), () => new Array(10).fill(0))

const sudoku = (board, x, y) => {

	if (y === 9)
		return true

	let next_x = (x + 1) % 9
	let next_y = next_x === 0 ? y + 1 : y

	if (board[x][y] !== '.')
		return sudoku(board, next_x, next_y)

	// set number
	let box_index
	for (let number = 1; number <= 9; number++) {
		box_index = 3 * Math.floor(x / 3) + Math.floor(y / 3)
		if (!row[x][number] && !col[y][number] && !box[box_index][number]) {
			row[x][number] = 1
			col[y][number] = 1
			box[box_index][number] = 1
			board[x][y] = number.toString()

			if (sudoku(board, next_x, next_y)) return true

			row[x][number] = 0
			col[y][number] = 0
			box[box_index][number] = 0
			board[x][y] = '.'
		}
	}

	return false

}


var solveSudoku = function (board) {

	let val, box_index
	for (let x = 0; x < 9; x++) {
		for (let y = 0; y < 9; y++) {
			val = board[x][y]
			row[x][val] = 1
			col[y][val] = 1
			box_index = 3 * Math.floor(x / 3) + Math.floor(y / 3)
			box[box_index][val] = 1
		}
	}
	sudoku(board, 0, 0)
}

const print = (board) => {
	board.forEach((row) => {
		console.log(row.join(' '))
	})
}


solveSudoku(board)
console.log(board)