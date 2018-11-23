const Queue = require('../datastructures/queue')
const Graph = require('../datastructures/graph')

const graph = new Graph(6)

class breadthFirstSearch {
	constructor(){ }

	bfs(startingNode) {
		var visited = [];
		for (var i = 0; i < graph.noOfVertices; i++)
		visited[i] = false;
		var q = new Queue();
		visited[startingNode] = true;
		q.enqueue(startingNode);
		while (!q.isEmpty()) {
			var getQueueElement = q.dequeue();
			console.log(getQueueElement);
			var get_List = graph.AdjList.get(getQueueElement);
			for (var i in get_List) {
				var neigh = get_List[i];
				if (!visited[neigh]) {
					visited[neigh] = true;
					q.enqueue(neigh);
				}
			}
		}
	}
}

const bfs = new breadthFirstSearch()

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

bfs.bfs('A');
