import React from 'react';

export function WithMousePosition(Component) {
    return class extends React.Component {
        state = {
            position: [0, 0],
        };

        handleMouseMove = (event) => {
            const x = event.clientX;
            const y = event.clientY;

            this.setState({
                position: [x, y],
            });
        };

        render() {
            return (
                <div onMouseMove={this.handleMouseMove}>
                    <Component {...this.props} position={this.state.position}></Component>
                </div>
            )
        }

    }
}


export class MouseTracker extends React.Component {

    render() {
        const [x, y] = this.props.position;
        return (
            <div>
                The Current position is {x}, {y}
            </div>
        );
    }
}



export default WithMousePosition(MouseTracker);










