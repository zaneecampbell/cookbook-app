import React from 'react';
import { connect } from 'react-redux';
import RecipeForm from './RecipeForm';
import { Link } from 'react-router-dom';
import { startAddRecipe } from '../actions/recipes';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  divWrapper: {
    margin: '20px',
    boxShadow: 'none',
    background: '#e6e6e6'
  },
  paperContainer: {
    maxWidth: '1920px',
    margin: 'auto',
    boxShadow: 'none',
    background: '#e6e6e6'
  }
});

export class AddRecipePage extends React.Component {
  // submits to firebase and redux then pushes to homepage
  onSubmit = (recipe) => {
    this.props.startAddRecipe(recipe);
    this.props.history.push('/');
  };
  
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.divWrapper}>
        <Paper classes={{ root: classes.paperContainer }}>
          <h1>Add New Recipe</h1>
          <RecipeForm onSubmit={this.onSubmit}/>
        </Paper>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddRecipe: (recipe) => dispatch(startAddRecipe(recipe))
});

export default connect(undefined, mapDispatchToProps)(withStyles(styles)(AddRecipePage));

// done