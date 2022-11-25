import React from 'react';

export function AddButton(Component) {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.title = 'This is a title';
            this.content = 'This is a content';
        }

        state = {
            counter: 0,
        };

        handleOnClick = () => {
            this.setState((state) => ({ counter: state.counter + 1 }));
        };

        render() {
            return (
                <div>
                    <Component
                        {...this.props}
                        title={this.title}
                        content={this.content}
                    >
                        <button onClick={this.handleOnClick}>Click me</button>
                        <h1>{this.state.counter}</h1>
                    </Component>
                </div>
            );
        }
    };
}
