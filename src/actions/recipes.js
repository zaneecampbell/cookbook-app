import database from '../firebase/firebase';

// adds new recipe to redux
export const addRecipe = (recipe) => ({
    type: 'ADD_RECIPE',
    recipe
  });

  // adds new recipe to firebase
export const startAddRecipe = (recipeData = {}) => {
return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
    name = '',
    ingredients = '',
    instructions = '',
    tags = ''
    } = recipeData;
    const recipe = { name, ingredients, instructions, tags };

    return database.ref(`users/${uid}/recipes`).push(recipe).then((ref) => {
    dispatch(addRecipe({
        id: ref.key,
        ...recipe
    }));
    });
};
};