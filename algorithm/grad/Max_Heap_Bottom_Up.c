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
	if (i <= 0) return; // array start from 1.

	int left_child = i*2;
	int right_child = i*2+1;
	int max_node = i;
	
	if ((left_child <= N) && (Heap[left_child] > Heap[max_node]))
		max_node = left_child;
	if ((right_child <= N) && (Heap[right_child] > Heap[max_node]))
		max_node = right_child;

	if (max_node != i) {
		swap(i, max_node);
		heapify(max_node);
	}
}

void bottom_up_build_heap() {
	srand(time(NULL));
	// insert node and heapify.
	for (int i = 1; i <= N; i++) {
		int ran = rand() % 100;
		Heap[i] = ran;
	}

	int parent = N/2;
	for (int i = parent; i >= 1; i--) {
		heapify(i);
	}
}

void traversal() {
	for (int i = 1; i <= N; i++)
		printf("%d ", Heap[i]);
}

int main(int argc, char const *argv[]) {
	bottom_up_build_heap();
	traversal();
	return 0;
}
