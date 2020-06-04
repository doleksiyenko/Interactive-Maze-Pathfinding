import React, { Component } from "react";
import "./Navigation.css";

class Navigation extends Component {
    runAlgorithm = (e) => {
        e.preventDefault();
    };

    render() {
        return (
            <nav>
                <span>Select Algorithm: </span>
                <select className="dropdown" id="algorithm-list">
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
                <button onClick={this.runAlgorithm}>Run Algorithm!</button>
                <button>Clear Board</button>
            </nav>
        );
    }
}

export default Navigation;
