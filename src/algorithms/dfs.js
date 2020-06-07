dfs = (nodeList, mazeSize, startNode, endNode) => {
    // nodeList is a list of the nodes in the board (in Board.js -> this.state.nodes)
    // it is assumed the grid is always square so maze size is the number of columns in the grid
    // create data structures
    let stack = [startNode];
    let visited = [];
    let previousNode = new Array(mazeSize * mazeSize).fill(null);

    let vertex;
    while (stack.length > 0) {
        // get the first
        vertex = stack.pop();
        if (vertex == endNode) {
            break;
        }
        visited.push(vertex);
        getUnvisitedNeighbours(nodeList, mazeSize, vertex, visited).forEach(
            (neighbour) => {
                stack.push(neighbour);
                previousNode[neighbour[2] * mazeSize + neighbour[1]] = vertex;
            }
        );
    }
    // find the path using prevNode
    let endVertex = vertex;
    console.log(`This is the ending vertex: ${endVertex}`);
    console.log(`Previous node list ${previousNode}`);
};

getUnvisitedNeighbours = (nodeList, mSize, vertex, visited) => {
    vertexPosition = [vertex[1], vertex[2]];

    neighboursPos = [
        [vertexPosition[0] + 1, [vertexPosition[1]]],
        [vertexPosition[0] - 1, [vertexPosition[1]]],
        [vertexPosition[0], [vertexPosition[1]] + 1],
        [vertexPosition[0], [vertexPosition[1]] - 1],
    ];

    // now that the neighbour positions are defined, get the vertices from the nodeList
    let unvisitedNeighbours = [];
    NeighboursPos.forEach((neighbourPos) => {
        let x = neighbourPos[0];
        let y = neighbourPos[1];
        unvisitedNeighbours.push(nodeList[y * mSize + x]);
    });

    // have the nodes from nodeList, now check whether they are walls, and whether any of
    // them have already been visited, or if they are out of bounds
    univisitedNeighboursPos.forEach((neighbour) => {
        unvisitedNeighbours = checkNeighbourBounds(mSize, unvisitedNeighbours);
        unvisitedNeighbours = checkWallStatus(univisitedNeighbours);
        unvisitedNeighbours = checkIfVisited(visited, unvisitedNeighbours);
    });

    return unvisitedNeighbours;
};

checkNeighbourBounds = (mazeSize, neighbourList) => {
    if (mazeSize > neighbour[0] > 0 && mazeSize > neighbour[1] > 0) {
    }
};

checkWallStatus = (neighbourList) => {
    //
};

checkIfVisited = (visited, neighbourList) => {
    //
};

export default dfs;
