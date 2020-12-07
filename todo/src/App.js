import React, { useReducer } from 'react';

import ACTION from './actions/index';
import TodoList from './components/TodoList';
import { reducer, initialState } from './reducers/reducer';

let currentState = reducer(initialState, {type: null});

const todos = [{
  item: 'Learn about reducers',
  completed: false,
  id: 3892987589
}];

function App() {

  const [state, dispatch] = useReducer(reducer, todos);
  console.log(state);

  const handleCompled = id => {
    const item = state.filter(x => x.id === id);
    dispatch(reducer(item, ACTION.TOGGLE_COMPLETED))
  }

  return (
    <div>
      <h2>To Do List</h2>
      <TodoList currentState={todos} handleCompled={handleCompled}/>
      <input type='text'/>
      <button>+</button>
    </div>
  );
}

export default App;
