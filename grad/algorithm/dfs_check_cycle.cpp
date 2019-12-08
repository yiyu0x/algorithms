#include <list>
// #include <limits.h> 
#include <iostream>

using namespace std;

class Graph {
	int v;
	list <int> *adj;
	bool isCyclic(int v, bool visited[], bool *rs);

public:
	Graph(int v);
	void addEdge(int v, int w);
	bool isCyclic();
};

Graph::Graph(int v) {
	this->v = v;
	adj = new list<int>[v];
}

void Graph::addEdge(int v, int w) {
	adj[v].push_back(w);
}

bool Graph::isCyclic() 
{ 
    // Mark all the vertices as not visited and not part of recursion 
    // stack 
    bool *visited = new bool[V]; 
    bool *recStack = new bool[V]; 
    for(int i = 0; i < V; i++) 
    { 
        visited[i] = false; 
        recStack[i] = false; 
    } 
  
    // Call the recursive helper function to detect cycle in different 
    // DFS trees 
    for(int i = 0; i < V; i++) 
        if (isCyclicUtil(i, visited, recStack)) 
            return true; 
  
    return false; 
} 

int main() { 
    // Create a graph given in the above diagram 
    Graph g(4); 
    g.addEdge(0, 1); 
    g.addEdge(0, 2); 
    g.addEdge(1, 2); 
    g.addEdge(2, 0); 
    g.addEdge(2, 3); 
    g.addEdge(3, 3); 
  
    if(g.isCyclic()) 
        cout << "Graph contains cycle"; 
    else
        cout << "Graph doesn't contain cycle"; 
    return 0; 
} 