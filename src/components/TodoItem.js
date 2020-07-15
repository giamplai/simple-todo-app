import React, { Component } from "react"


class TodoItem extends Component {
    getStyle(completed) {
        return completed ? {
            fontStyle: "italic",
            color: "#d35e0f",
            opacity: 0.4,
            textDecoration: "line-through",
        } : null;
    }
    render() {
        const { completed, id, title } = this.props.todo;
        return (
            <li className="todo-item">
                <input
                    style={this.getStyle()}
                    type="checkbox"
                    checked={completed}
                    onChange={() => this.props.handleChangeProps(id)}
                />
                <button onClick={() => this.props.deleteTodoProps(id)}>Delete</button>
                <span style={this.getStyle(completed)}>
                    {title}
                </span>
            </li>
        )
    }
}

export default TodoItem