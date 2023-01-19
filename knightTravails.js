const getNeighbours = (node) => {
    const neighbours = [];

    const [r, c] = node;

    if (r - 1 > -1 && c + 2 < 8) {
        neighbours.push([r - 1, c + 2]);
    }

    if (r - 1 > -1 && c -2 > -1) {
        neighbours.push([r - 1, c - 2]);
    }

    if (r + 1 < 8 && c + 2 < 8) {
        neighbours.push([r + 1, c + 2]);
    }

    if (r + 1 < 8  && c -2 >-1) {
        neighbours.push([r + 1, c - 2]);
    }

    if (r - 2 > -1 && c + 1 < 8) {
        neighbours.push([r - 2, c + 1]);
    }

    if (r - 2 > -1 && c -1 > -1) {
        neighbours.push([r - 2, c - 1]);
    }

    if (r + 2 < 8 && c + 1 < 8) {
        neighbours.push([r + 2, c + 1]);
    }

    if (r + 2 < 8  && c - 1 > -1) {
        neighbours.push([r + 2, c - 1]);
    }

    return neighbours;
}

const createGraph = () => {

    const graph = {};

    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++){
            const temp = [i, j];
            graph[temp] = [...getNeighbours(temp)];
        }
    }

    return graph;
}

const knightMoves = (start, end) => {
    
    const graph = createGraph();

    const visited = new Set();
    visited.add(start.toString());

    const path = [start];
    const queue = [[start, path]];

    if (start.toString() === end.toString()) return path;

    while (queue.length > 0) {
        let [current, pathSoFar] = queue.shift();

        if (current.toString() === end.toString()) return pathSoFar;

        for (let neighbour of graph[current]) {
            if (!visited.has(neighbour.toString())) {
                queue.push([neighbour, [...pathSoFar, neighbour]]);
                visited.add(neighbour.toString());
            }
        }

    }

    return path;
}

const result = knightMoves([3, 3], [4, 3]);

console.log(`It takes ${result.length - 1} to move from ${result[0]} to ${result[result.length - 1]}: `)
result.forEach(el => console.log(el));