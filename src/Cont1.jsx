import React from 'react';
import { AddButton } from './AddButton';
import myStyle from './myStyle.js';

class App extends React.Component {
    render() {
        const title = this.props.title;
        const content = this.props.content;

        return (
            <div style={myStyle}>
                {title}
                {content}
                {this.props.children}
            </div>
        );
    }
}

export default AddButton(App);
