import React, { useReducer } from 'react';
import TodoList from './components/TodoList';
import Form from './components/Form';

import { addTodo, toggleCompleted, clearCompleted, addCompleted } from './actions/index';
import { reducer, initialState } from './reducers/reducer';

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleAddItem = itemName => {
    dispatch(addTodo(itemName));
  }
  const handleToggleCompleted = id => {
    dispatch(toggleCompleted(id));
  }
  const handleClearCompleted = () => {
    dispatch(addCompleted());
    dispatch(clearCompleted());
  }
  
  console.log(state);
  return (
    <div>
      <h2>To Do List</h2>
      <TodoList 
        todos={state.todos} 
        handleToggleCompleted={handleToggleCompleted}/>
      <Form 
        handleAddItem={handleAddItem}
        handleClearCompleted={handleClearCompleted}/>
    </div>
  );
}

export default App;
