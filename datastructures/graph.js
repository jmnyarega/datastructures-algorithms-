class Graph {
  /**
  * constructor
  * @member {Graph}
  */
  constructor() {
    this.vertices = {};
  }

  /**
  * addVertex -> adds a vertex to the graph
  * @param {name} name element added
  * @param {edge} edges element added
  * @member {Graph}
  */
  addVertex(name, edges) {
    this.vertices[name] = edges;
  }

  /**
  * printGraph -> prints the current state graph
  * @member {Graph}
  * @return {Graph}
  */
  printGraph() {
    return this;
  }
}

module.exports = Graph;
