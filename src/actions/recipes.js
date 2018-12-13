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

// removes the recipe from redux
export const removeRecipe = ({ id } = {}) => ({
    type: 'REMOVE_RECIPE',
    id
});

// removes chosen recipe from firebase
export const startRemoveRecipe = ({ id } = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/recipes/${id}`).remove().then(() => {
            dispatch(removeRecipe({ id }))
        });
    }
};

// sets personal recipes in redux
export const setRecipes = (recipes) => ({
    type: 'SET_RECIPES',
    recipes
});

// pulls recipes from firebase after login
export const startSetRecipes = (() => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/recipes`).once('value').then((recipeData) => {
            const recipes = [];

            recipeData.forEach((recipe) => {
                recipes.push({
                    id: recipe.key,
                    ...recipe.val()
                });
            });

            dispatch(setRecipes(recipes));
        });
    }
});