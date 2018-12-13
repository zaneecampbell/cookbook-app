import React from 'react';
import { Link } from 'react-router-dom';
import RecipeList from './RecipeList';
import Button from '@material-ui/core/Button';

const CookBookPage = () => {
  
  return (
  <div>
    <Link to='/create'>
      <Button>Add Recipe</Button>
    </Link>
    <RecipeList />
  </div>
  )
}

export default CookBookPage;
