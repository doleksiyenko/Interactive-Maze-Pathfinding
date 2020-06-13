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
                    <option value="Dijkstra's">Dijkstra's</option>
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
