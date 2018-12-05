#coding=utf-8
RESOURCES = [ 10, 5, 7 ]
ALLOCATED = [  [0, 1, 0],
               [3, 0, 2],
               [3, 0, 2],
               [2, 1, 1],
               [0, 0, 2]
            ]
MAX =       [  [7, 5, 3],
               [3, 2, 2],
               [9, 0, 2],
               [2, 2, 2],
               [4, 3, 3]
            ]
NEED = []
AVAILABLE = RESOURCES.copy();
while True :
   backup = AVAILABLE
   for i in range(len(ALLOCATED)) :
      AVAILABLE[0] -= ALLOCATED[i][0]
      AVAILABLE[1] -= ALLOCATED[i][1]
      AVAILABLE[2] -= ALLOCATED[i][2]
   
   print('ALLOCATED', 'AVAILABLE')
   for i, e in enumerate(ALLOCATED) :
      if i == 0:
         print(e, AVAILABLE)
      else:
         print(e)
   print()

   req = int(input('request 0,1,2,3,4 ... '))
   a, b, c = input('allocate a b c ... ').split()
   backup = AVAILABLE
   if int(a) > AVAILABLE[0] or int(b) > AVAILABLE[1] or int(c) > AVAILABLE[2] :
      print('REJECTED')
      print('------------------------------------')
      AVAILABLE = backup
      continue

   ALLOCATED[req][0] += int(a)
   ALLOCATED[req][1] += int(b)
   ALLOCATED[req][2] += int(c)
   AVAILABLE = RESOURCES.copy();
   for i in range(len(ALLOCATED)) :
      AVAILABLE[0] -= ALLOCATED[i][0]
      AVAILABLE[1] -= ALLOCATED[i][1]
      AVAILABLE[2] -= ALLOCATED[i][2]

   for i in range(len(ALLOCATED)) :
      tmp = []
      tmp.append(MAX[i][0]-ALLOCATED[i][0])
      tmp.append(MAX[i][1]-ALLOCATED[i][1])
      tmp.append(MAX[i][2]-ALLOCATED[i][2])
      NEED.append(tmp)


   print('NEED     ', 'ALLOCATED')
   for i, j in zip(NEED, ALLOCATED) :
         print(i, j)
   print()


   SEQ = []
   times = len(ALLOCATED)
   backup = ALLOCATED.copy()
   safe = 1
   for _ in range(times):
      safe = 0
      for i in range(len(ALLOCATED)) :
         if ALLOCATED[i][-1] != 'X':
            if AVAILABLE[0] >= NEED[i][0] and AVAILABLE[1] >= NEED[i][1] and AVAILABLE[2] >= NEED[i][2] :
               AVAILABLE[0] += ALLOCATED[i][0]
               AVAILABLE[1] += ALLOCATED[i][1]
               AVAILABLE[2] += ALLOCATED[i][2]
               ALLOCATED[i].append('X')
               SEQ.append(i)
               # print(ALLOCATED)
               print('test allocated->', i)
               safe = 1
               break
      if safe == 0 :
         print('***UNSAFE***')
         allocated = backup
         break
   if safe == 1 :
      print()
      print('request: p'+str(req)+'-->', a, b, c)
      print('sqquence: ', SEQ)
      print('***SAFE***')

   print('NEED     ', 'ALLOCATED')
   for i, j in zip(NEED, ALLOCATED) :
         print(i, j)
   print()
   # print(AVAILABLE)
   # print(ALLOCATED)