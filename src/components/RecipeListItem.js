import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const RecipeListItem = ({ id, name, ingredients, instructions, tags }) => (
    <div>
        <span>
        {name} &nbsp;
        {ingredients} &nbsp;
        {instructions} &nbsp;
        {tags} &nbsp;
        <Link to={`/edit/${id}`}>
            <Button>Edit Recipe</Button>
        </Link>
        </span>
    </div>
);

export default RecipeListItem;