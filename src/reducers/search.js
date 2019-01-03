// Search Reducer

const searchReducerDefault = {
    text: ''
};

export default ( state = searchReducerDefault, action ) => {
    switch (action.type) {
        case 'SET_TEXT_SEARCH':
            return {
                ...state,
                text: action.text
            };
        default:
            return state
    }
}