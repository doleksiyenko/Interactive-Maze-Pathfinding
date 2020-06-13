// doesn't get the neighbours properly
export class DFS {
    dfs = (nodeList, mazeSize, startNode, endNode) => {
        // nodeList is a list of the nodes in the board (in Board.js -> this.state.nodes)
        // it is assumed the grid is always square so maze size is the number of columns in the grid
        // create data structures
        let stack = [startNode];
        let visited = [];
        let previousNode = new Array(mazeSize * mazeSize).fill(null);

        let vertex;
        while (stack.length > 0) {
            // get the vertex last added to the stack
            vertex = stack.pop();

            if (this.arraysEqual(vertex, endNode)) {
                break;
            }

            visited.push(vertex);

            let neighbours = this.getUnvisitedNeighbours(
                nodeList,
                mazeSize,
                vertex,
                visited
            );
            neighbours.forEach((neighbour) => {
                stack.push(neighbour);
                previousNode[neighbour[2] * mazeSize + neighbour[1]] = vertex;
            });
        }
        // find the path using prevNode
        let endVertex = vertex;
        console.log(`This is the ending vertex: ${endVertex}`);
        visited.shift();
        return visited;
    };

    getUnvisitedNeighbours = (nodeList, mSize, vertex, visited) => {
        let vertexPosition = [vertex[1], vertex[2]];
        let neighboursPos = [
            [vertexPosition[0] + 1, vertexPosition[1]],
            [vertexPosition[0] - 1, vertexPosition[1]],
            [vertexPosition[0], vertexPosition[1] + 1],
            [vertexPosition[0], vertexPosition[1] - 1],
        ];

        // now that the neighbour positions are defined, get the vertices from the nodeList
        let unvisitedNeighbours = [];
        neighboursPos.forEach((neighbourPos) => {
            let x = neighbourPos[0];
            let y = neighbourPos[1];
            if (typeof nodeList[y * mSize + x] !== "undefined") {
                unvisitedNeighbours.push(nodeList[y * mSize + x]);
            }
        });

        // have the nodes from nodeList, now check whether they are walls, and whether any of
        // them have already been visited, or if they are out of bounds
        unvisitedNeighbours.forEach((neighbour) => {
            unvisitedNeighbours = this.checkNeighbourBounds(
                mSize,
                unvisitedNeighbours
            );
            unvisitedNeighbours = this.checkWallStatus(unvisitedNeighbours);
            unvisitedNeighbours = this.checkIfVisited(
                visited,
                unvisitedNeighbours
            );
        });
        console.log(unvisitedNeighbours);
        return unvisitedNeighbours;
    };

    checkNeighbourBounds = (mazeSize, neighbourList) => {
        let inBounds = [];
        neighbourList.forEach((neighbour) => {
            if (mazeSize > neighbour[0] > 0 && mazeSize > neighbour[1] > 0) {
                inBounds.push(neighbour);
            }
        });
        return inBounds;
    };

    checkWallStatus = (neighbourList) => {
        let notWalls = [];
        neighbourList.forEach((neighbour) => {
            // if the neighbour is a passage or the start/ending node
            if (
                neighbour[0] === 0 ||
                neighbour[0] === 3 ||
                neighbour[0] === 2
            ) {
                notWalls.push(neighbour);
            }
        });
        return notWalls;
    };

    checkIfVisited = (visited, neighbourList) => {
        let notVisited = [];
        neighbourList.forEach((neighbour) => {
            if (this.searchForArray(neighbour, visited) === -1) {
                notVisited.push(neighbour);
            }
        });
        return notVisited;
    };

    // search routine (to check visited)
    searchForArray(needle, haystack) {
        // search for array <needle> in <haystack>, return the position of array if exists, -1
        // otherwise
        let i;
        let j;
        let current;
        for (i = 0; i < haystack.length; ++i) {
            if (needle.length === haystack[i].length) {
                current = haystack[i];
                for (j = 0; j < needle.length && needle[j] === current[j]; ++j);
                if (j === needle.length) return i;
            }
        }
        return -1;
    }

    arraysEqual = (a, b) => {
        // check if two arrays are equal
        if (a === b) return true;
        if (a == null || b == null) return false;
        if (a.length !== b.length) return false;

        for (var i = 0; i < a.length; ++i) {
            if (a[i] !== b[i]) return false;
        }
        return true;
    };
}
