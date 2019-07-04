#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#define N 6

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
void quick_sort(int arr[], int left, int right) {
	
	if (left >= right) return;

	int pivot = left;
	int l = left;
	int r = right;

	while (l != r) {
		while (arr[r] > arr[pivot] && l < r) r--;
		while (arr[l] <= arr[pivot] && l < r) l++;
		if (l < r) swap(arr, l, r);
	}
	
	swap(arr, pivot, l);
	pivot = l;
	quick_sort(arr, left, pivot - 1);
	quick_sort(arr, pivot + 1, right);
}
int main(int argc, char const *argv[]) {
	srand(time(NULL));
	int arr[N];
	for (int i = 0; i < N; i++)
		arr[i] = (rand()%50)+1;
	print_arr(arr);
	quick_sort(arr, 0, N-1);
	print_arr(arr);
	return 0;
}