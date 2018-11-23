const Queue = require('../datastructures/queue')
const Graph = require('../datastructures/graph')

const graph = new Graph(6)

class depthFirstSearch {
	constructor(){ }

dfs(startingNode) {
	let visited = [];
	for (let i = 0; i < graph.noOfVertices; i++) {
		visited[i] = false
  }
  this.DFSUtil(startingNode, visited)
}

  DFSUtil(vert, visited) {
  	visited[vert] = true;
  	console.log(vert);
  	const get_neighbours = graph.AdjList.get(vert);
  	for (var i in get_neighbours) {
  		const get_elem = get_neighbours[i]
  		if (!visited[get_elem]) {
  			this.DFSUtil(get_elem, visited)
      }
    }
  }
}

const dfs = new depthFirstSearch()

const vertices = [ 'A', 'B', 'C', 'D', 'E', 'F' ];
for (var i = 0; i < vertices.length; i++) {
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
