const recipeReducerDefaultState = [];

export default (state = recipeReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_RECIPE':
      return [
        ...state,
        action.recipe
      ];
    case 'REMOVE_RECIPE':
      return state.filter(({ id }) => id !== action.id);
    case 'SET_RECIPES':
      return action.recipes;
    default:
      return state;
  }
};