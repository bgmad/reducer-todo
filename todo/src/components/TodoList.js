import React from 'react';
import TodoItem from './TodoItem';

const TodoList = props => {
    return (
        <ul>
            {props.currentState.map(el => <TodoItem item={el} key={el.id}/>)}
        </ul>
    )
}

export default TodoList;