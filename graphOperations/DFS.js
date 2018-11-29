const Queue = require('../datastructures/queue');
const Graph = require('../datastructures/graph');

const graph = new Graph(6);

class BreadthFirstSearch {
  bfs(startingNode) {
    const visited = [];
    for (var i = 0; i < graph.noOfVertices; i++) { visited[i] = false; }
    const q = new Queue();
    visited[startingNode] = true;
    q.enqueue(startingNode);
    while (!q.isEmpty()) {
      const getQueueElement = q.dequeue();
      console.log(getQueueElement);
      const get_List = graph.AdjList.get(getQueueElement);
      for (var i in get_List) {
        const neigh = get_List[i];
        if (!visited[neigh]) {
          visited[neigh] = true;
          q.enqueue(neigh);
        }
      }
    }
  }
}

const bfs = new BreadthFirstSearch();

const vertices = ['A', 'B', 'C', 'D', 'E', 'F'];
for (let i = 0; i < vertices.length; i++) {
  graph.addVertex(vertices[i]);
}

graph.addEdge('A', 'B');
graph.addEdge('A', 'D');
graph.addEdge('A', 'E');
graph.addEdge('B', 'C');
graph.addEdge('D', 'E');
graph.addEdge('E', 'F');
graph.addEdge('E', 'C');
graph.addEdge('C', 'F');

bfs.bfs('A');
