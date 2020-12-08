import ACTION from '../actions/index';

export const initialState = {
    todos: [],
    done: []
};

export const reducer = (state, action) => {
    switch (action.type) {
        case ACTION.TOGGLE_COMPLETED:
            return ({...state, todos: [...state.todos.map(it => action.payload === it.id ? {...it, completed: !it.completed} : it)]});
        case ACTION.ADD_TODO:
            return ({...state, todos: [...state.todos, {item: action.payload, completed: false, id: Date.now()}]});
        case ACTION.CLEAR_COMPLETED:
            return ({...state, todos: [...state.todos.filter(it => !it.completed)]});    
        case ACTION.ADD_COMPLETED:
                return ({...state, done: [...state.todos.filter(it => it.completed), ...state.done]});
        default:
            return state;
    }
}

