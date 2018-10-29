#include <stdio.h>
#include <stdlib.h>
struct Node {
	int value;
	struct Node* left;
	struct Node* right;
};

struct Node* newNode(int value) {
	struct Node* tmp =  (struct Node*)malloc(sizeof(struct Node)); 
	tmp->value = value;
	tmp->left = NULL;
	tmp->right = NULL;
	return tmp;
}
struct Node* insert(struct Node* node, int value) {

	if (node==NULL) return newNode(value);
	if (node->value > value) {
		node->left = insert(node->left, value);
	} else {
		node->right = insert(node->right, value);
	}
	return node;
}

void inOrder(struct Node* node) {
	if (node!=NULL) {
		inOrder(node->left);
		printf("%d\n", node->value);
		inOrder(node->right);
	}
}	
int main() {
	struct Node* root = NULL;
	root = insert(root, 35);
	insert(root, 40);
	inOrder(root);
}