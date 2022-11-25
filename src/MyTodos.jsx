import React from 'react';

class MyTodos extends React.Component {
    render() {
        const input = <input type="checkbox" disabled checked />;
        const name = this.props.todos.map((todo) => (
            <li key={todo.id}>
                {todo.title}
                {todo.completed && input}
            </li>
        ));

        return <div>{name}</div>;
    }
}

export default MyTodos;
