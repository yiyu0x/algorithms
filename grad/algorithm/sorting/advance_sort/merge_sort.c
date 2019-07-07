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

void merge(int arr[], int l, int m, int r) {
	int left_capacity = m - l + 1;
	int right_capacity = r - m;
	int left_arr[left_capacity];
	int right_arr[right_capacity];
	// copy value to subarray
	for (int i = 0; i < left_capacity; i++) left_arr[i] = arr[(l)+i];
	for (int i = 0; i < right_capacity; i++) right_arr[i] = arr[(m+1)+i]; // middle point gave left, so here use middle + 1
	// compare value with left and right array
	int i = 0;
	int j = 0;
	int k = l;
	while (i < left_capacity && j < right_capacity) {
		if (left_arr[i] < right_arr[j]) {
			arr[k] = left_arr[i];
			i++;
		} else {
			arr[k] = right_arr[j];
			j++;
		}
		k++;
	}
	// copy remaining array value
	while (i < left_capacity)
		arr[k++] = left_arr[i++];
	while (j < right_capacity)
		arr[k++] = right_arr[j++];

}
void merge_sort(int arr[], int l, int r) {
	if (l < r) {
		int m = (l+r)/2;
		merge_sort(arr, l, m);
		merge_sort(arr, m+1, r);
		merge(arr, l, m, r);
	}
}
int main(int argc, char const *argv[]) {
	srand(time(NULL));
	int arr[N];
	for (int i = 0; i < N; i++)
		arr[i] = (rand()%50)+1;
	merge_sort(arr, 0, N-1);
	print_arr(arr);
	return 0;
}