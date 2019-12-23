let DFS = (rooms, x, y, dis) => {
	let row = rooms.length
	let col = rooms[0].length
	
	if (x < 0 || y < 0 || x > row || y > col || 
		rooms[x] == undefined || rooms[x][y] == undefined || 
		rooms[x][y] < 0 || rooms[x][y] < dis) return
	
	rooms[x][y] = dis
	DFS(rooms, x + 1, y, dis + 1)
	DFS(rooms, x - 1, y, dis + 1)
	DFS(rooms, x, y + 1, dis + 1)
	DFS(rooms, x, y - 1, dis + 1)

}

var wallsAndGates = function(rooms) {
	// console.log(graph[0][0])
	let row = rooms.length
	let col = rooms[0].length
    for (let i = 0; i < row; i++) {
    	for (let j = 0; j < col; j++) {
    		if (rooms[i][j] === 0) DFS(rooms, i, j, 0)
    	}
	}

	return rooms
};

let INF = 999
let graph = [
	[INF, -1, 0, INF],
	[INF, INF, INF, -1],
	[INF, -1, INF, -1],
  	[0, -1, INF, INF]]


console.log(wallsAndGates(graph))