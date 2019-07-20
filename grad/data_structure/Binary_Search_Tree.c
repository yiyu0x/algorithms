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
void inorder_traversal(Node* node) {
	inorder(node);
	printf("\n");
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

Node* min_node(Node* n) {
	Node* curr = n;
	if (curr->left != NULL)
		curr = curr->left;
	return curr;
}

Node* get_node(Node* curr, int value) {
	if (curr == NULL) return NULL;
	if (value > curr->value) return get_node(curr->right, value);
	if (value < curr->value) return get_node(curr->left, value);
	if (value == curr->value) return curr;
}

Node* get_inorder_sucessor(Node* root, int value) {
	
	Node* n = get_node(root, value);
	if (n == NULL) {
		printf("error\n");
		return NULL;
	}
	// if ndoe have right child, return min value in right sub-tree
	if (n->right != NULL) {
		return min_node(n->right);
	}

	Node* parent = NULL;
	Node* curr = root;
	while (curr != n) {
		if (value < curr->value) {
			parent = curr;
			curr = curr->left;
		} else {
			curr = curr->right;
		}
	}
	return parent;

}

void inorder_sucessor(Node* root, int value) {
	
	Node *successor = get_inorder_sucessor(root, value);
	if (successor != NULL)
		printf("node %d inorder successor is %d.\n", value, successor->value);
	else
		printf("%d has no inorder successor.\n", value);
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
	inorder_traversal(root);
	inorder_sucessor(root, 5);
	return 0;
}