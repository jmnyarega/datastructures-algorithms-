const PriorityQueue = require('../datastructures/priorityQueue');
const Graph = require('../datastructures/graph');

const INFINITY = 1 / 0;

class Djikstra extends Graph {
  /**
  * Calculate shortest path between two nodes in a graph
  * @param {start} start starting point
  * @param {finish} finish finishing point
  */
  shortestPath(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let path = [];
    let smallest;
    let vertex;
    let neighbor;
    let alt;
    for (vertex in this.vertices) {
      if (Object.prototype.hasOwnProperty.call(this.vertices, vertex)) {
        if (vertex === start) {
          distances[vertex] = 0;
          nodes.enqueue(0, vertex);
        } else {
          distances[vertex] = INFINITY;
          nodes.enqueue(INFINITY, vertex);
        }
        previous[vertex] = null;
      }
    }
    while (!nodes.isEmpty()) {
      smallest = nodes.dequeue();
      if (smallest === finish) {
        path = [];
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (!smallest || distances[smallest] === INFINITY) {
        continue;
      }
      for (neighbor in this.vertices[smallest]) {
        if (Object.prototype.hasOwnProperty.call(this.vertices[smallest], neighbor)) {
          alt = distances[smallest] + this.vertices[smallest][neighbor];
          if (alt < distances[neighbor]) {
            distances[neighbor] = alt;
            previous[neighbor] = smallest;
            nodes.enqueue(alt, neighbor);
          }
        }
      }
    }
    return path;
  }
}

// driver
const g = new Djikstra();
g.addVertex('A', { B: 7, C: 8 });
g.addVertex('B', { A: 7, F: 2 });
g.addVertex('C', { A: 8, F: 6, G: 4 });
g.addVertex('D', { F: 8 });
g.addVertex('E', { H: 1 });
g.addVertex('F', {
  B: 2, C: 6, D: 8, G: 9, H: 3,
});
g.addVertex('G', { C: 4, F: 9 });
g.addVertex('H', { E: 1, F: 3 });

g.shortestPath('A', 'H').concat(['A']).reverse(); // [ 'A', 'B', 'F', 'H' ]

