import React, { Component } from 'react'

class TodoList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            todo: [],
        }
    }
    
    // 동적 임포트
    onClick = () => {
        import('./Todo.js').then(({Todo}) => {
            const {todos} = this.state;
            const position = todos.length + 1;
            const newTodo = <Todo key={position} title={'할일 ${position}'} />;
            this.setState({todos: [...todos, newTodo]});
        });
    };

    render() {
        const {todos} = this.state;

        return (
            <div>
                <button onClick={this.onClick}>할 일 추가 </button>
                {todos}
            </div>
        );
    }
}

export default TodoList
