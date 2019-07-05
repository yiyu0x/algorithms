#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#define N 20

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

void print_arr(int arr[]) {
	for (int i = 0; i < N; i++)
		printf("%d ", arr[i]);
	printf("\n");
}

int partition(int arr[], int l, int r) {
	int pivot = arr[l];
	int i = l + 1;
	int j = r;
	while (i <= j) {
		while(arr[i] < pivot) i++;
		while(arr[j] >= pivot) j--;
		if (i < j) swap(arr, i, j);
	}
	swap(arr, l, j);
	return j;
}

int kth_smallest(int arr[], int l, int r, int k) {
	if (l <= r) {
		int p = partition(arr, l, r);
		if (p == k-1) return arr[p];
		if (p < k-1) return kth_smallest(arr, p + 1, r, k);
		if (p > k-1) return kth_smallest(arr, l    , p, k);
	}
	return -1;
}
int main(int argc, char const *argv[]) {
	srand(time(NULL));
	int arr[N];
	for (int i = 0; i < N; i++)
		arr[i] = (rand()%50)+1;
	int K = 3;
	printf("%d-th smallest is %d\n", 
								K,
								kth_smallest(arr, 0, N-1, K));
	bubble_sort(arr);
	print_arr(arr);
	return 0;
}