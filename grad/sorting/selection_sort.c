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
void selection_sort(int arr[]) {
	for (int i = 0; i < N; i++) {
		int min = i;
		for (int j = i + 1; j < N; j++) {
			if (arr[j] < arr[min]) min = j;
		}
		if (min != i) swap(arr, min, i);
	}
}
int main(int argc, char const *argv[]) {
	srand(time(NULL));
	int arr[N];
	for (int i = 0; i < N; i++)
		arr[i] = (rand()%50)+1;
	selection_sort(arr);
	print_arr(arr);
	return 0;
}