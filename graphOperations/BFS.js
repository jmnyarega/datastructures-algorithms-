const Graph = require('../datastructures/graph');

const graph = new Graph(6);

class DepthFirstSearch {
  dfs(startingNode) {
    const visited = [];
    for (let i = 0; i < graph.noOfVertices; i++) {
      visited[i] = false;
    }
    this.DFSUtil(startingNode, visited);
  }

  DFSUtil(vert, visited) {
    visited[vert] = true;
    const getNeighbours = graph.AdjList.get(vert);
    for (const i in getNeighbours) {
      const get_elem = getNeighbours[i];
      if (!visited[get_elem]) {
        this.DFSUtil(get_elem, visited);
      }
    }
  }
}

const dfs = new DepthFirstSearch();

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

dfs.dfs('A');
