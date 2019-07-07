#include <stdbool.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int R, C;
bool DFS(char** board, int row, int col, char* word, int word_index) {
	
	if (word_index == strlen(word)) return true;
	if (row < 0 || row >= R || col < 0 || col >= C) return false;
	// printf("row:%d col%d -> %c\n", row, col, board[row][col]);
	if (board[row][col] != 'x' && board[row][col] == word[word_index]) {
		char tmp = board[row][col];
		board[row][col] = 'x';
		if (DFS(board, row + 1, col, word, word_index + 1) ) return true;
		if (DFS(board, row - 1, col, word, word_index + 1) ) return true;
		if (DFS(board, row, col + 1, word, word_index + 1) ) return true;
		if (DFS(board, row, col - 1, word, word_index + 1) ) return true;
		board[row][col] = tmp;
	}
	return false;
}

bool exist(char** board, int boardSize, int* boardColSize, char* word){
	// printf("R:%d C:%d\n", boardSize, *boardColSize);
    R = boardSize;
	C = *boardColSize;
	for (int i = 0; i < boardSize; i++) {
     	for (int j = 0; j < *boardColSize; j++) {
			if (board[i][j] == word[0]) {
				if (DFS(board, i, j, word, 0) ) return true;
			}
		}
    }
    return false;
}

int main(int argc, char const *argv[]) {

	char board0[][3] =
	{
        {'C','A','A'},
		{'A','A','A'},
		{'B','C','D'}
	};
	char **board = malloc(sizeof(char*) * 3);
	for (int i = 0; i < 3; i++)
		board[i] = malloc(sizeof(char) * 3);
	for (int i = 0; i < 3; i++)
		for(int j = 0; j < 3; j++)
			board[i][j] = board0[i][j];

	int col = 3;
	if (exist(board, 3, &col, "AAB")) printf("true");
	return 0;
}
