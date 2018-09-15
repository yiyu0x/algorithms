#include <iostream>

using namespace std;

void heapify(int array[], int i, int n) {

	int parent = i;
	int left = i*2+1;
	int right = i*2+2;

	if ( left < n && array[left] > array[parent] ) 
		parent = left;

	if ( right < n && array[right] > array[parent] ) 
		parent = right;

	if ( parent != i ) {
		swap(array[i], array[parent]);
		heapify(array, parent, n);
	}
}

void heapSort(int array[], int n) {

	for ( int i=n/2-1; i>=0; i-- ) {
		heapify(array, i, n);
	}
	// exchange root and tail 
	for ( int i=n-1; i>=0; i-- ) {
		swap(array[0], array[i]);
		heapify(array, 0, i);
	}

}


void printArray(int array[], int n) {
	
	for ( int i=0; i<n; i++ ) {
		cout << array[i] << " ";
	}

	cout << endl;
}

int main() {

	int array[] = {12, 11, 13, 5, 7, 6};
	int len = sizeof(array)/sizeof(array[0]);

	printArray(array, len);
	heapSort(array, len);
	printArray(array, len);
}