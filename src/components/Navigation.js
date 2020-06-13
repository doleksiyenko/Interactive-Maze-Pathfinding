import React, { Component } from "react";
import "./component-css/Navigation.css";

class Navigation extends Component {
    constructor(props) {
        super();
        this.selectRef = React.createRef();
    }

    render() {
        return (
            <nav>
                <span>Select Algorithm: </span>
                <select
                    className="dropdown"
                    id="algorithm-picker"
                    ref={this.selectRef}
                >
                    <option value="DFS">DFS</option>
                    <option value="BFS">BFS</option>
                    <option value="Dijkstra's">Dijkstra's</option>
                </select>
                <span id="speedspan">Select Speed: </span>
                <select className="dropdown" id="speed">
                    <option value="1times">x1</option>
                    <option value="2times">x2</option>
                    <option value="4times">x4</option>
                </select>
                <button
                    onClick={() =>
                        this.props.runAlgorithm(this.selectRef.current.value)
                    }
                >
                    Run Algorithm!
                </button>
                <button onClick={this.props.changeReset}>Clear Board</button>
                <button onClick={this.props.changeStartEndReset}>
                    Clear Start/End
                </button>
            </nav>
        );
    }
}

export default Navigation;
