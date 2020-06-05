import React, { Component } from "react";
import Node from "./Node";
import "./component-css/Board.css";

class Board extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nodes: [],
        };

        this.changeStatus = this.changeStatus.bind(this);
    }

    createEmptyBoard = () => {
        // ensure that the nodes list is empty (for board clearing)
        this.setState({
            nodes: [],
        });

        for (let i = 0; i < 400; i++) {
            let newNode = [0, i % 20, Math.floor(i / 20)];
            this.setState((prevState) => ({
                nodes: [...prevState.nodes, newNode],
            }));
        }
    };

    changeStatus = (status, position) => {
        // when a Node is clicked, it will trigger this method (change its status in this.state.nodes)
        let updatedNodes = [...this.state.nodes];
        let index = 20 * position[1] + position[0];
        updatedNodes[index][0] = status;
        this.setState({
            nodes: updatedNodes,
        });
    };

    componentDidMount() {
        this.createEmptyBoard();
    }

    componentDidUpdate() {
        if (this.props.reset === true) {
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
                        changeStatus={this.changeStatus}
                        reset={this.props.reset}
                    ></Node>
                ))}
            </div>
        );
    }
}

export default Board;
