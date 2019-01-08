// Shows searched recipes

export default (recipes, { text, tags }) => {
    return recipes.filter((recipe) => {
        const textMatch = recipe.name.toLowerCase().includes(text.toLowerCase());
        const tagMatch = recipe.tags.toLowerCase().includes(tags.toLowerCase());

        return textMatch && tagMatch
    });
}