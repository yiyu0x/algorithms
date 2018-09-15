## 最長path不會超過最短path的兩倍

- root一定是黑色
- nil一定是黑色
- black node的子節點一定是red node
- red node不能相連

## insert

- 先塗red
- 父親也是red的話要把父親與父親的兄弟塗黑
- 祖父要塗紅