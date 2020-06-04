import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/Navigation";

function App() {
    return (
        <div className="App">
            <div class="main">
                <h1>Interactive Mazes!</h1>
                <Navigation className="navigation" />
            </div>
        </div>
    );
}

export default App;
