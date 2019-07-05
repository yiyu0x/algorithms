#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#define N 20

void print_arr(int arr[]) {
	for (int i = 0; i < N; i++)
		printf("%d ", arr[i]);
	printf("\n");
}

void insertion_sort(int arr[]) {
	for (int i = 0; i < N; i++) {
		int j, now = arr[i];
		for (j = i - 1; j >= 0 && arr[j] > now; j--)
			arr[j+1] = arr[j];
		arr[j+1] = now;
	}
}
int main(int argc, char const *argv[]) {
	srand(time(NULL));
	int arr[N];
	for (int i = 0; i < N; i++)
		arr[i] = (rand()%50)+1;
	insertion_sort(arr);
	print_arr(arr);
	return 0;
}