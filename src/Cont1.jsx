import React from 'react';
import { AddButton } from './AddButton';
import myStyle from './myStyle';

class App extends React.Component {
    render() {
        const title = this.props.title;
        const content = this.props.content;

        return (
            <div style={myStyle}>
                <div>{title}</div>
                <div>{content}</div>
                {this.props.children}
            </div>
        );
    }
}

export default AddButton(App);
