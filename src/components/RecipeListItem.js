import React from 'react';

const RecipeListItem = ({ id, name, ingredients, instructions, tags }) => (
    <div>
        <div>{name}</div>
        <div>{ingredients}</div>
        <div>{instructions}</div>
        <div>{tags}</div>
    </div>
);

export default RecipeListItem;