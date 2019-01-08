// Search Reducer

const searchReducerDefault = {
    text: '',
    tags: ''
};

export default ( state = searchReducerDefault, action ) => {
    switch (action.type) {
        case 'SET_TEXT_SEARCH':
            return {
                ...state,
                text: action.text
            };
        case 'SET_TAGS_SEARCH':
            return {
                ...state,
                tags: action.tags
            }
        default:
            return state
    }
}