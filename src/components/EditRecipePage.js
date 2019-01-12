import React from 'react';
import { connect } from 'react-redux';
import RecipeForm from './RecipeForm';
import { startEditRecipe, startRemoveRecipe } from '../actions/recipes';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

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
    background: '#e6e6e6',
    textAlign: 'center'
  },
  removeLabel: {
    fontSize: '20px',
    textDecoration: 'none',
    color: '#e6e6e6'
  }
});

export class EditRecipePage extends React.Component {
  // submits the changes to firebase and redux
  onSubmit = (recipe) => {
    this.props.startEditRecipe(this.props.recipe.id, recipe);
    this.props.history.push('/');
  };

  // removes the changes from firebase and redux
  onRemove = () => {
    this.props.startRemoveRecipe({ id: this.props.recipe.id });
    this.props.history.push('/');
  };
  
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.divWrapper}>
        <Paper classes={{ root: classes.paperContainer }}>
          <h1>Edit Recipe</h1>
          <Button style={{ backgroundColor: 'red' }} classes={{ label: classes.removeLabel }} onClick={this.onRemove}>Remove</Button>
          <br />
          <br />
            <RecipeForm
              recipe={this.props.recipe}
              onSubmit={this.onSubmit}
            />
        </Paper>
      </div>
    );
  }
};

const mapStateToProps = (state, props) => ({
  recipe: state.recipes.find((recipe) => recipe.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditRecipe: (id, recipe) => dispatch(startEditRecipe(id, recipe)),
  startRemoveRecipe: (data) => dispatch(startRemoveRecipe(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(EditRecipePage));

// done