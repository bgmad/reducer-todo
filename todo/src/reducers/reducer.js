import ACTION from '../actions/index';

export const initialState = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
    }
];

export const reducer = (state, action) => {
    switch (action.type) {
        case ACTION.TOGGLE_COMPLETED:
            return ([])
        default:
            return state;
    }
}

