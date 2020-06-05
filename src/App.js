import React from "react";
import "./App.css";

import Navigation from "./components/Navigation";
import Board from "./components/Board";
import Key from "./components/Key";

function App() {
    return (
        <div className="App">
            <div className="main">
                <h1>Interactive Mazes!</h1>
                <Navigation className="navigation" />
            </div>
            <Key />
            <div className="board-container">
                <Board />
            </div>
        </div>
    );
}

export default App;
