import React from "react";
import "./component-css/Board.css";

function Key() {
    return (
        <div style={{ textAlign: "center" }}>
            <span>
                <b>Key:</b>
            </span>
            <br></br>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <span>Passage/Wall: </span>
                <div
                    style={{
                        width: "20px",
                        height: "20px",
                        marginLeft: "10px",
                    }}
                    className="status-0"
                ></div>
                <span>/</span>
                <div
                    style={{
                        width: "20px",
                        height: "20px",
                        marginLeft: "10px",
                    }}
                    className="status-1"
                ></div>
                <span style={{ marginLeft: "10px" }}>Start: </span>
                <div
                    style={{
                        width: "20px",
                        height: "20px",
                        marginLeft: "10px",
                    }}
                    className="status-2"
                ></div>
                <span style={{ marginLeft: "10px" }}>Stop: </span>
                <div
                    style={{
                        width: "20px",
                        height: "20px",
                        marginLeft: "10px",
                    }}
                    className="status-3"
                ></div>
                <span style={{ marginLeft: "10px" }}>
                    Visited (but not in path):{" "}
                </span>
                <div
                    style={{
                        width: "20px",
                        height: "20px",
                        marginLeft: "10px",
                    }}
                    className={"status-4"}
                ></div>
                <br></br>
                <span style={{ marginLeft: "10px" }}>Path:</span>
                <div
                    style={{
                        width: "20px",
                        height: "20px",
                        marginLeft: "10px",
                    }}
                    className={"status-5"}
                ></div>
            </div>
        </div>
    );
}

export default Key;
