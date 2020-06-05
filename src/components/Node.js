import React, { Component } from "react";

class Node extends Component {
    constructor(props) {
        super(props);

        this.state = {
            position: this.props.position,
            status: this.props.status,
        };
    }

    // change from a wall to passage and vice-versa when a node is clicked
    // unless designated as a starting node or ending node.
    changeWallPassage = () => {
        if (this.state.status === 1 || this.state.status === 0) {
            this.setState((prevState) => ({
                status: (prevState.status + 1) % 2,
            }));

            this.props.changeStatus(
                (this.state.status + 1) % 2,
                this.props.position
            );
        }
    };

    componentDidUpdate() {
        if (this.props.reset === true) {
            this.setState({
                status: 0,
            });
        }
    }

    render() {
        return (
            <div
                className={`status-${this.state.status}`}
                id={this.state.position}
                onClick={this.changeWallPassage}
            ></div>
        );
    }
}

export default Node;
