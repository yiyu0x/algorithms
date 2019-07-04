#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#define N 20

void print_arr(int arr[]) {
	for (int i = 0; i < N; i++)
		printf("%d ", arr[i]);
	printf("\n");
}
void swap(int arr[], int a, int b) {
	int tmp = arr[a];
	arr[a] = arr[b];
	arr[b] = tmp;
}
void bubble_sort(int arr[]) {
	int is_swap = 0;
	for (int i = 0; i < N; i++) {
		for (int j = 0; j < N - i - 1; j++) {
			if (arr[j] > arr[j+1]) {
				swap(arr, j, j+1);
				is_swap = 1;
			}
		}
		if (is_swap == 0) break;
	}
}
int main(int argc, char const *argv[]) {
	srand(time(NULL));
	int arr[N];
	for (int i = 0; i < N; i++)
		arr[i] = (rand()%50)+1;
	bubble_sort(arr);
	print_arr(arr);
	return 0;
}