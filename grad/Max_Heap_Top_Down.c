#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#define N 20
int Heap[N+1];

void swap(int a, int b) {
	int tmp = Heap[a];
	Heap[a] = Heap[b];
	Heap[b] = tmp;
}

void heapify(int i) {
	int parent = i/2;
	if (i <= 0) return; // array start from 1.
	if (Heap[i] > Heap[parent]) {
		swap(i, parent);
		heapify(parent);
	}
}

void top_down_build_heap() {
	srand(time(NULL));
	// insert node and heapify.
	for (int i = 1; i <= N; i++) {
		int ran = rand() % 100;
		Heap[i] = ran;
		heapify(i);
	}
}

void traversal() {
	for (int i = 1; i <= N; i++)
		printf("%d ", Heap[i]);
}

int main(int argc, char const *argv[]) {
	top_down_build_heap();
	traversal();
	return 0;
}
