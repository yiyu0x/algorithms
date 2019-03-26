#coding=utf-8
RESOURCES = [10, 5, 7]
ALLOCATED = [[0, 1, 0],
             [2, 0, 0],
             [3, 0, 2],
             [2, 1, 1],
             [0, 0, 2]
            ]
MAX       = [[7, 5, 3],
             [3, 2, 2],
             [9, 0, 2],
             [2, 2, 2],
             [4, 3, 3]
            ]
NEED      = []
AVAILABLE = []
SAFE_SEQ  = []
def updateNeed():
	NEED.clear()
	for m, a in zip(MAX, ALLOCATED):
		NEED.append([m[0]-a[0], m[1]-a[1], m[2]-a[2]]) 

def updateAvailable():
	AVAILABLE.clear()
	a = RESOURCES[0]
	b = RESOURCES[1]
	c = RESOURCES[2]
	for i in ALLOCATED:
		a -= i[0]
		b -= i[1]
		c -= i[2]
	AVAILABLE.append(a)
	AVAILABLE.append(b)
	AVAILABLE.append(c)

def printStatus():
	print('{:^10s}{:^10s}{:^10s}'.format('MAX', 'ALLOCATED', 'NEED'))
	for a, b, c in zip(MAX, ALLOCATED, NEED):
		print(a, b, c)
	print('AVAILABLE:', AVAILABLE)

def firstCheck(p, a, b, c):
	# request <= need
	n = NEED[p]
	if a > n[0] or b > n[1] or c > n[2]:
		return False
	# request <= available
	ava = AVAILABLE
	for i in AVAILABLE:
		if a > ava[0] or b > ava[1] or c > ava[2]:
			return False
	return True

def agreeRequest(p, a, b, c):
	ALLOCATED[p][0] += a
	ALLOCATED[p][1] += b
	ALLOCATED[p][2] += c
	updateNeed()
	updateAvailable()

def disAgreeRequest(p, a, b, c):
	ALLOCATED[p][0] -= a
	ALLOCATED[p][1] -= b
	ALLOCATED[p][2] -= c
	updateNeed()
	updateAvailable()

def haveSafeSequence():
	ava = AVAILABLE.copy()
	need = NEED.copy()
	SAFE_SEQ.clear()
	for _ in range(5):
		for index, i in enumerate(need):
			if i[0] <= ava[0] and i[1] <= ava[1] and i[2] <= ava[2]:
				# print('good', i, '<=', ava)
				SAFE_SEQ.append('p' + str(index))
				ava[0] += ALLOCATED[index][0]
				ava[1] += ALLOCATED[index][1]
				ava[2] += ALLOCATED[index][2]
				need[index][0] = 999
				need[index][1] = 999
				need[index][2] = 999
				break

	return True if len(SAFE_SEQ) == 5 else False

def printSeq():
	print('Safe! safe sequence is ', end="")
	for index, i in enumerate(SAFE_SEQ):
		if index == 4:
			print(i)
		else:
			print(i, '-> ', end="")

if __name__ == '__main__':
	updateNeed()
	updateAvailable()
	while True:
		printStatus()
		p = int(input('which process you want to request (0 ~ 4)... '))
		a, b, c = map(int, input('how many x y z... ').split())
		# print(p,a,b,c)
		
		if firstCheck(p, a, b, c):
			agreeRequest(p, a, b, c)
			if haveSafeSequence():
				printSeq()
				updateNeed()
				updateAvailable()
				
			else:
				print('Unsafe!')
				disAgreeRequest(p, a, b, c)

		else:
			print('REJECT!')
			continue



# while True :
# updateNeed()
# print(NEED)
# print(AVAILABLE)
