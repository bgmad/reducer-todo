import React from 'react';
import TodoItem from './TodoItem';

const TodoList = props => {
    return (
        <ul>
            {props.todos.map(item => 
            <TodoItem 
                item={item} 
                key={item.id} 
                handleToggleCompleted={props.handleToggleCompleted}
            />)}
        </ul>
    )
}

export default TodoList;