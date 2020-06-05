import React, { Component } from "react";
import Node from "./Node";
import "./component-css/Board.css";

class Board extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nodes: [],
        };
    }

    initialCreateNodes = () => {
        for (let i = 0; i < 400; i++) {
            let newNode = [0, i % 20, Math.floor(i / 20)];
            this.setState((prevState) => ({
                nodes: [...prevState.nodes, newNode],
            }));
        }
    };

    componentDidMount() {
        this.initialCreateNodes();
    }

    render() {
        return (
            <div className="board">
                {this.state.nodes.map((element) => (
                    <Node
                        key={[element[1], element[2]]}
                        position={[element[1], element[2]]}
                    ></Node>
                ))}
            </div>
        );
    }
}

export default Board;
