import React, { Component } from "react";
import Node from "./Node";
import "./component-css/Board.css";
import { DFS } from "../algorithms/dfs";

class Board extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nodes: [],
            startExists: false,
            endExists: false,
            startPos: null,
            endPos: null,
            elementsPerRow: 20,
        };

        this.changeNodeStatus = this.changeNodeStatus.bind(this);
        this.setStart = this.setStart.bind(this);
        this.setEnd = this.setEnd.bind(this);
    }

    createEmptyBoard = () => {
        // create an empty board with
        let elementsPerRow = this.state.elementsPerRow;
        let numberOfNodes = elementsPerRow ** 2;
        this.setState({
            nodes: [],
        });

        for (let i = 0; i < numberOfNodes; i++) {
            let newNode = [
                0,
                i % elementsPerRow,
                Math.floor(i / elementsPerRow),
            ];

            this.setState((prevState) => ({
                nodes: [...prevState.nodes, newNode],
            }));
        }
    };

    changeNodeStatus = (status, position) => {
        // when a Node is clicked, it will trigger this method
        // (change its status in this.state.nodes)
        let updatedNodes = [...this.state.nodes];
        let index = this.state.elementsPerRow * position[1] + position[0];
        updatedNodes[index][0] = status;
        this.setState({
            nodes: updatedNodes,
        });
    };

    setStart = (position) => {
        // the node triggers this event when the 's' key is pressed over it
        // prevents another start from being created
        this.setState({
            startExists: true,
            startPos: position,
        });
    };

    setEnd = (position) => {
        // the node triggers this event when the 'e' key is pressed over it
        // prevents another end from being created
        this.setState({
            endExists: true,
            endPos: position,
        });
    };

    createDFS = () => {
        let algorithm = new DFS();
        // run DFS if a starting position and ending position have been set
        if (this.state.startPos === null || this.state.endPos === null) {
            console.log("There is no starting or ending position set!");
        } else {
            let start = [2, ...this.state.startPos];
            let end = [3, ...this.state.endPos];
            console.log("START : " + start);
            console.log("END: " + end);
            console.log(
                algorithm.dfs(
                    this.state.nodes,
                    this.state.elementsPerRow,
                    start,
                    end
                )
            );
        }
    };

    componentDidMount() {
        // when the page loads, create an empty board
        this.createEmptyBoard();
    }

    componentDidUpdate() {
        // when the clear board button is clicked in the nav, all the settings are reset
        if (this.props.reset === true) {
            // clear the start and end nodes
            this.setState({
                startExists: false,
                endExists: false,
                startPos: null,
                endPos: null,
            });
            // switch off the reset
            this.props.changeReset();
        }
    }

    render() {
        return (
            <div className="board">
                {this.state.nodes.map((element) => (
                    <Node
                        key={[element[1], element[2]]}
                        position={[element[1], element[2]]}
                        status={element[0]}
                        changeStatus={this.changeNodeStatus}
                        reset={this.props.reset}
                        startExists={this.state.startExists}
                        endExists={this.state.endExists}
                        setStart={this.setStart}
                        setEnd={this.setEnd}
                    ></Node>
                ))}
                <button onClick={this.createDFS}>Run Algorithm</button>
            </div>
        );
    }
}

export default Board;
