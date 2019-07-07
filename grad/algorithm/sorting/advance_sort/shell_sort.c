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
void shell_sort(int arr[]) {
	int spam = N / 2;
	while(spam > 0) {
		for (int i = 0; i < N - spam; i++) {
			if (arr[i] > arr[i+spam])
				swap(arr, i, i+spam);
		}
		spam /= 2;
	}
}
int main(int argc, char const *argv[]) {
	srand(time(NULL));
	int arr[N];
	for (int i = 0; i < N; i++)
		arr[i] = (rand()%50)+1;
	shell_sort(arr);
	print_arr(arr);
	return 0;
}