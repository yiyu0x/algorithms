#include <iostream>
using namespace std;
class Node {
public:
	Node(int val) {
		value = val;
		next = NULL;
	};
private:
	int value;
	Node *next;
	friend class LL;
};
class LL {
private:
	Node *head;
public:
	LL() {
		head = NULL;
	}
	void insert_back(int value) {
		Node *node = new Node(value);
		if (head == NULL) {
			head = node;
		}
		else {
			Node *tmp = head;
			while (tmp->next) tmp = tmp->next;
			tmp->next = node;
		}
	}
	void insert_front(int value) {
		Node *node = new Node(value);
		if (head == NULL) {
			head = node;
		}
		else {
			node->next = head;
			head = node;
		}
	}
	void delete_node(int value) {
		if (head == NULL) return;
		else {
			if (head->value == value) {
				head = head->next;
			}
			else if (head->next->value == value) {
				head->next = head->next->next;	;	
			}
			else {
				Node* tmp = head->next;
				while (tmp->next) {
					cout << "now val: " << tmp->next->value << endl;
					if (tmp->next->value == value) {
						tmp->next = tmp->next->next;
					} 
					tmp = tmp->next;
				}
			}
		}
	};
	void tarversal() {
		if (head == NULL) return;
		else {
			Node* tmp = head;
			while (tmp != NULL) {
				cout << tmp->value << endl;
				tmp = tmp->next;
			}
		}
	};
};
int main(int argc, char const *argv[]) {
	LL list;
	list.insert_front(1);
	list.insert_back(9);
	list.delete_node(9);
	list.insert_back(2);
	list.insert_back(3);
	list.delete_node(2);
	list.tarversal();
}