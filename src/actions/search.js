// Search Recipe List by Name
export const setTextSearch = ( text = '' ) => ({
    type: 'SET_TEXT_SEARCH',
    text
});

// Search Recipe List by Tags
export const setTagsSearch = ( tags = '' ) => ({
    type: 'SET_TAGS_SEARCH',
    tags
})