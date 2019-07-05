#include <stdio.h>
#include <stdlib.h>

typedef struct node {
	int value;
	struct node *next;
} Node;

Node *head;

void insert(int value) {
	
	Node *node = NULL;
	node = (Node*)malloc(sizeof(Node));

	node->value = value;
	node->next = NULL;

	if (head == NULL) {
		head = node;
		return;
	}

	Node *tmp = head;
	while (tmp->next != NULL)
		tmp = tmp->next;
	tmp->next = node;
}

void traversal(Node *current) {
	if (current == NULL) return;
	while (current) {
		printf("%d -> ", current->value);
		current = current->next;
	}
	printf("NULL\n");
}

void delete(int target) {
	if (head == NULL) return;
	
	if (head->value == target) {
		head = head->next;
		return;
	}

	Node *current = head;
	while (current->next) {
		if (current->next->value == target) {
			current->next = current->next->next;
			return;
		}
		current = current->next;
	}
}
void reverse() {
	if (head == NULL) return;

	Node *prev = NULL;
	Node *curr = NULL;
	Node *next = head;
	printf("hhh\n");
	while (next) {
		prev = curr;
		curr = next;
		next = next->next;
		curr->next = prev;
	}

	head = curr;
}
int main() {
	int mode = 0;
	int value = -1;
	while (1) {
		
		printf("0)exit 1)insert 2)delete 3)reverse ... ");
		fflush(stdin);
		scanf("%d", &mode);
		
		if (mode == 0) {
			exit(0);
		} else if (mode == 1) {
			scanf("%d", &value);
			insert(value);
		} else if (mode == 2) {
			scanf("%d", &value);
			delete(value);
		} else if (mode == 3) {
			reverse();
		}
		traversal(head);
	}
}