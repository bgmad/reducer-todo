const ACTION = {
    ADD_TODO: "ADD_TODO",
    TOGGLE_COMPLETED: "TOGGLE_COMPLETED",
    CLEAR_COMPLETED: "CLEAR_COMPLETED",
    ADD_COMPLETED: "ADD_COMPLETED"
}

export const addTodo = itemName => {
    return {type: ACTION.ADD_TODO, payload: itemName};
}
export const toggleCompleted = id => {
    return {type: ACTION.TOGGLE_COMPLETED, payload: id};
}
export const clearCompleted = () => {
    return {type: ACTION.CLEAR_COMPLETED};
}
export const addCompleted = () => {
    return {type: ACTION.ADD_COMPLETED};
}

export default ACTION;