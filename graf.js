class Graph {
    constructor() {
      this.data = {}; // список смежности графа
    }
    
    addVertex(vertex) {
      if (!this.data[vertex]) {
        this.data[vertex] = [];
      }
    }

    removeVertex(vertex) {
        if (!(vertex in this.data)) {
            throw new Error('В графе нет таких вершин');
        }
        for (const vert in this.data) {
            const index = this.data[vert].findIndex(v => v === vertex);
            if (index !== -1) {
                this.data[vert].splice(index, 1);
            }
        }
        delete this.data[vertex];
    }

    removeEdge(vertex1, vertex2) {
        const index1 = this.data[vertex1].findIndex(v => v === vertex2);
        if (index1 !== -1) {
            this.data[vertex1].splice(index1, 1);
        }
        const index2 = this.data[vertex2].findIndex(v => v === vertex1);
        if (index2 !== -1) {
            this.data[vertex2].splice(index2, 1);
        }
    }
    
    addEdge(vertex1, vertex2) {
      if (!(vertex1 in this.data) || !(vertex2 in this.data)) {
        throw new Error('В графе нет таких вершин');
      }
  
      if (!this.data[vertex1].includes(vertex2)) {
        this.data[vertex1].push(vertex2);
      }
      if (!this.data[vertex2].includes(vertex1)) {
        this.data[vertex2].push(vertex1);
      }
    }
  }


  const graph = new Graph();

  graph.addVertex('A');
  graph.addVertex('B');
  graph.addVertex('C');
  graph.addVertex('D');
  
  graph.addEdge('A', 'B');
  graph.addEdge('A', 'C');
  
  console.log(graph.data);

  /*
{
  A: ['B', 'C'],
  B: ['A'],
  C: ['A'],
  D: []
}
 */
