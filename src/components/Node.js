import React, { Component } from "react";

class Node extends Component {
    constructor(props) {
        super(props);

        this.state = {
            position: this.props.position,
            status: 0,
        };
    }

    render() {
        return (
            <div
                className={`status-${this.state.status}`}
                id={this.state.position}
            ></div>
        );
    }
}

export default Node;
