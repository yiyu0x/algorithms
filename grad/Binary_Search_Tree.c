#include <stdlib.h>
#include <stdio.h>
typedef struct node {
	int value;
	struct node *left;
	struct node *right;
} Node;

Node* new_node(int value) {

	Node *node = NULL;
	node = (Node*)malloc(sizeof(Node));
	node->value = value;
	node->left = NULL;
	node->right = NULL;
	return node;
}
Node* insert(Node* node, int value) {

	if (node == NULL) 
		return new_node(value);
	else if (value <= node->value)
		node->left = insert(node->left, value);
	else if (value > node->value)
		node->right = insert(node->right, value);
	return node;
}

void inorder(Node* node) {

	if (node == NULL) return;
	inorder(node->left);
	printf("%d -> ", node->value);
	inorder(node->right);
}

Node* get_sucessor(Node* node) {
	
	while (node->right)
		node = node->right;
	return node;
}
Node* delete(Node* node, int value) {

	if (node == NULL) return node;
	if (value < node->value) {
		node->left = delete(node->left, value);
	} else if (value > node->value) {
		node->right = delete(node->right, value);
	} else {
		// node == node->value
		// tre target node with one child or not.
		if (node->left == NULL) {
			Node* tmp = node->right;
			free(node);
			return tmp;
		} 
		else if (node->right == NULL) {
			Node* tmp = node->left;
			free(node);
			return tmp;
		}
		// the target node with two childs.
		Node* successor = get_sucessor(node->left);
		node->value = successor->value;
		node->left = delete(node->left, successor->value);
	
	}
	return node;
}
int main(int argc, char const *argv[]) {

	Node *root = NULL;
	root = insert(root, 3);	
	insert(root, 5);
	insert(root, 4);
	insert(root, 2);
	insert(root, 1);
	// inorder(root);
	delete(root, 3);
	inorder(root);
	return 0;
}