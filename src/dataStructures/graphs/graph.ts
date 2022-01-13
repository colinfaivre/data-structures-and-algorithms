class Graph {
    adjacencyList: number[];
    value: number;

    constructor(value: number) {
        this.value = value;
        this.adjacencyList = [];
    }

    addAdjacent(node: number) {
        this.adjacencyList.push(node);
    }

    removeAdjacent(node: number) {
        const index = this.adjacencyList.indexOf(node);
        if (index > -1) {
            this.adjacencyList.splice(index, 1);
            return node;
        }
        return null;
    }

    getAdjacencyList() {
        return this.adjacencyList;
    }

    isAdjacent(node: number) {
        return this.adjacencyList.indexOf(node) > -1;
    }
}