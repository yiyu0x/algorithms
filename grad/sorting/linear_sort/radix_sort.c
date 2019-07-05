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
void radix_sort(int arr[]) {
	int count[N] = {0};
	for (int i = 0; i < N; i++)
		count[arr[i]]++;
	//
	int start[N] = {0};
	start[0] = 1;
	for (int i = 0; i < N; i++)
		start[i] = start[i-1] + count[i-1];
	//
	int output[N] = {0};
	for (int i = 0; i < N; i++)
		output[start[arr[i]]++] = arr[i];
	// copy array
	for (int i = 0; i < N; i++)
		arr[i] = output[i];
}
int main(int argc, char const *argv[]) {
	srand(time(NULL));
	int arr[N];
	for (int i = 0; i < N; i++)
		arr[i] = (rand()%N);
	print_arr(arr);
	radix_sort(arr);
	print_arr(arr);
	return 0;
}