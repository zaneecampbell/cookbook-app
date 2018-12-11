import React from 'react';
import RecipeForm from './RecipeForm';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

export class AddRecipePage extends React.Component {
  onSubmit = (recipe) => {
  };
  render() {
    return (
      <div>
        <h1>Add New Recipe</h1>
        <RecipeForm onSubmit={this.onSubmit}/>
      </div>
    );
  }
}

export default AddRecipePage;