#include <stdio.h>
#include <stdlib.h>
struct Node {
	int value;
	// char *color;
	struct Node* left;
	struct Node* right;
};
int getHeight(struct Node* node) {

	if (node) {
		if (!node->left && !node->right) {
			return 1;
		} else {
			return (getHeight(node->left) > getHeight(node->right)) ? getHeight(node->left) + 1 : getHeight(node->right) + 1;
		}
	}
	return 0;
}

int getBalanceFactor(struct Node* node) {
	return getHeight(node->left) - getHeight(node->right);
}

struct Node* rightRotation(struct Node* y) {

	struct Node* x = y->left;
	struct Node* tmp = x->right;
	x->right = y;
	y->left = tmp;
	return x;
}

struct Node* leftRotation(struct Node* x) {

	struct Node* y = x->right;
	struct Node* tmp = y->left;
	y->left = x;
	x->right = tmp;
	return y;
}


struct Node* newNode(int value) {
	struct Node* tmp =  (struct Node*)malloc(sizeof(struct Node)); 
	tmp->value = value;
	tmp->left = NULL;
	tmp->right = NULL;
	// tmp->color = "red";
	return tmp;
}
struct Node* insert(struct Node* node, int value) {

	if (node==NULL) return newNode(value);
	if (node->value > value) {
		node->left = insert(node->left, value);
	} else {
		node->right = insert(node->right, value);
	}

	int BF = getBalanceFactor(node);

	// only insert new node need to balance

	//LL case, so need to rightRotation
	// if (BF > 1 && node->left->value > value )
		// return rightRotation(node);
	//RR
	if (BF < -1 && node->right->value < value)
		return leftRotation(node);
	//LR
	// if (BF > 1 && node->left->value < value ) {
	// 	node->left = leftRotation(node->left);
	// 	return rightRotation(node);
	// }
	//RL
	// if (BF < -1 && node->right->value > value) {
	// 	node->right = rightRotation(node->right);
	// 	return leftRotation(node);
	// }
	return node;
}

void inOrder(struct Node* node) {
	if (node) {
		inOrder(node->left);
		printf("%d\n", node->value);
		inOrder(node->right);
	}
}




int main() {
	struct Node* root = NULL;
	root = insert(root, 35);
	root = insert(root, 99);
	root = insert(root, 100);
	root = insert(root, 20);
	root = insert(root, 30);
	root = insert(root, 3);
	root = insert(root, 2);
	inOrder(root);
	// printf("%d\n", getBalanceFactor(root));
	// printf("%d\n", root->left->value);
}