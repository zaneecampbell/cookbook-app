import React from 'react';
import { connect } from 'react-redux';
import RecipeForm from './RecipeForm';
import { Link } from 'react-router-dom';
import { startAddRecipe } from '../actions/recipes';
import Button from '@material-ui/core/Button';

export class AddRecipePage extends React.Component {
  onSubmit = (recipe) => {
    this.props.startAddRecipe(recipe);
    this.props.history.push('/');
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

const mapDispatchToProps = (dispatch) => ({
  startAddRecipe: (recipe) => dispatch(startAddRecipe(recipe))
});

export default connect(undefined, mapDispatchToProps)(AddRecipePage);