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

int partition2(int arr[], int l, int r) {
	int pivot = l;
	int i = l;
	int j = r;

	while (i != j) {
		while (arr[j] > arr[pivot] && i < j) j--;
		while (arr[i] <= arr[pivot] && i < j) i++;
		if (i < j) swap(arr, i, j);
	}
	
	swap(arr, pivot, i);
	return i;
}
int partition(int arr[], int l, int r) {
	int i = l;
	for (int j = l; j < r; j++) {
		if (arr[j] < arr[r]) {
			swap(arr, i++, j);
		}
	}
	swap(arr, i, r);
	return i;
}
void quick_sort(int arr[], int l, int r) {
	if (l < r) {
		int p = partition2(arr, l, r);//partition, partition2 are available 
		quick_sort(arr, l, p - 1);
		quick_sort(arr, p + 1, r);
	}
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