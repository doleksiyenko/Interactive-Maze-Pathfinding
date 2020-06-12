import React from "react";
import { Component } from "react";
import "./App.css";

import Navigation from "./components/Navigation";
import Board from "./components/Board";
import Key from "./components/Key";

function App() {
    return (
        <div className="App">
            <MainWrapper />
        </div>
    );
}

class MainWrapper extends Component {
    constructor(props) {
        super(props);

        this.state = {
            reset: false,
            run: false,
            algorithm: "DFS",
        };
        this.changeReset = this.changeReset.bind(this);
        this.runAlgorithm = this.runAlgorithm.bind(this);
    }

    changeReset = () => {
        this.setState({
            reset: this.state.reset ? false : true,
        });
    };

    runAlgorithm = (inputAlgorithm) => {
        this.setState({
            run: this.state.run ? false : true,
            algorithm: inputAlgorithm,
        });
    };

    render() {
        return (
            <div>
                <div className="main">
                    <h1>Interactive Mazes!</h1>
                    <Navigation
                        className="navigation"
                        changeReset={this.changeReset}
                        runAlgorithm={this.runAlgorithm}
                    />
                </div>
                <Key />
                <div className="board-container">
                    <Board
                        reset={this.state.reset}
                        changeReset={this.changeReset}
                        run={this.state.run}
                        algorithm={this.state.algorithm}
                        changeRun={this.runAlgorithm}
                    />
                </div>
            </div>
        );
    }
}

export default App;
