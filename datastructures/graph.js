class Graph {
  /**
  * constructor
  * @member {Graph}
  */
  constructor(noOfVertices) {
    this.noOfVertices = noOfVertices;
    this.AdjList = new Map();
  }

  /**
  * addVertex -> adds a vertex to the graph
  * @param {v} v element added
  * @member {Graph}
  */
  addVertex(v) {
    this.AdjList.set(v, []);
  }

  /**
  * addEdge -> adds a vertex to the graph
  * @param {v} v element added
  * @param {w} w element added
  * @member {Graph}
  */
  addEdge(v, w) {
    this.AdjList.get(v).push(w);
    this.AdjList.get(w).push(v);
  }

  /**
  * printGraph -> prints the current state graph
  * @member {Graph}
  * @return {Graph}
  */
  printGraph() {
    const getKeys = this.AdjList.keys();
    for (const i of getKeys) {
      const getValues = this.AdjList.get(i);
      let conc = '';
      for (const j of getValues) {
        conc += `${j} `;
      }
      console.log(`${i} -> ${conc}`);
    }
  }
}

module.exports = Graph;
