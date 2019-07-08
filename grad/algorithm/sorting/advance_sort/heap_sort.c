#include <stdio.h>
#include <stdlib.h>
#include <time.h>
int len = 20;
int N = 20;
int tail;
void print_arr(int arr[]) {
	for (int i = 0; i < N; i++)
		printf("%2d ", arr[i]);
	printf("\n");
}
void swap(int arr[], int a, int b) {
	int tmp = arr[a];
	arr[a] = arr[b];
	arr[b] = tmp;
}

void heapify(int arr[], int i) {
	int left = i*2 + 1;
	int right = i*2 + 2;
	int max = i;
	if (left <= tail && arr[left] > arr[max])
		max = left;
	if (right <= tail && arr[right] > arr[max])
		max = right;

	if (max != i) {
		swap(arr, i, max);
		heapify(arr, max);
	}
}

void delete(int arr[]) {
	swap(arr, 0, tail--);
	heapify(arr, 0);
}
void heap_sort(int arr[]) {
	// button-up
	for (int i = N/2 - 1; i >= 0; i--)
		heapify(arr, i);
	printf("%8s", "a_heap:");
	print_arr(arr);
	for (int i = 0; i < N; i++)
		delete(arr);

}
int main(int argc, char const *argv[]) {

	srand(time(NULL));
	int arr[N];
	tail = N - 1;
	for (int i = 0; i < N; i++)
		arr[i] = (rand()%50)+1;
	printf("%8s", "before:");
	print_arr(arr);
	heap_sort(arr);
	printf("%8s", "sorted:");
	print_arr(arr);
	return 0;
}