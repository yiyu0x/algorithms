let DFS = (grid, x, y) => {
	let row, col
	col = (row = grid.length) ? grid[0].length : 0 
	// if array is empty, arr[][] will make some error.

    if (x < 0 || y < 0 || x >= row || y >= col)
    	return 
	
	if (grid[x][y] === '1') grid[x][y] = '0'
	else return // if grid[x][y] it is water, dont need to recusive
	
	DFS(grid, x+1, y)
	DFS(grid, x-1, y)
	DFS(grid, x, y+1)
	DFS(grid, x, y-1)
}

var numIslands = function(grid) {
    let row = grid.length
    let col = grid[0].length
    let islands = 0
    for(let r = 0; r < row; r++) {
    	for(let c = 0; c < col; c++) {
    		if (grid[r][c] === '1') {
				islands++
				DFS(grid, r, c)
    		}
    	}
    }
    return islands
};


let grid = 
[
	['1', '1', '1', '1', '0'],
	['1', '1', '0', '1', '0'],
	['1', '1', '0', '0', '0'],
	['0', '0', '0', '0', '0']
]

console.log(numIslands(grid))