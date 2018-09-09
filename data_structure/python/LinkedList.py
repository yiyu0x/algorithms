class Node():
	def __init__(self, val):
		self.val = val
		self.next = None

class List():
	def __init__(self):
		self.head = None

	def insert(self, val):
		node = Node(val)

		if self.head == None:
			self.head = node
		else:
			iterator = self.head
			while(iterator.next):
				iterator = iterator.next
			iterator.next = node

	def tarversal(self):
		iterator = self.head
		while(iterator):
			print(iterator.val)
			iterator = iterator.next

	def delete(self,val):
		if self.head.val == val:
			self.head = self.head.next
		
		else:
			iterator = self.head;
			while(iterator):
				if iterator.next.val == val:
					iterator.next = iterator.next.next
					return
				iterator = iterator.next


if __name__ == '__main__':
	link = List()
	for i in range(10):
		link.insert(i)
	link.delete(1)
	link.delete(5)
	link.delete(3)
	link.delete(0)
	link.tarversal()