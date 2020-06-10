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

    createStartEnd = (event) => {
        // only create the start/end if the node is not already a wall
        // can only create one start and one ending point on the board
        if (this.state.status === 0) {
            if (event.keyCode === 69 && !this.props.endExists) {
                // create an end node at this postion if 'e' is pressed
                // and a end doesn't exist
                this.setState({
                    status: 3,
                });
                this.props.changeStatus(3, this.props.position);
                this.props.setEnd(this.props.position);
            } else if (event.keyCode === 83 && !this.props.startExists) {
                // create a start node at this position if 's' is pressed
                // and an start doesn't exist
                this.setState({
                    status: 2,
                });
                this.props.changeStatus(2, this.props.position);
                this.props.setStart(this.props.position);
            }
        }
    };

    mouseEnter = () => {
        document.addEventListener("keydown", this.createStartEnd);
    };
    mouseLeave = () => {
        document.removeEventListener("keydown", this.createStartEnd);
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
                onMouseEnter={this.mouseEnter}
                onMouseLeave={this.mouseLeave}
            ></div>
        );
    }
}

export default Node;
