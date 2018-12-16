import React from 'react';
import { connect } from 'react-redux';
import RecipeForm from './RecipeForm';
import { startEditRecipe, startRemoveRecipe } from '../actions/recipes';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  typographyTitle: {
    fontSize: '20px',
    marginBottom: '50px'
  },
  removeLabel: {
    fontSize: '20px',
    textDecoration: 'none'
  }
});

export class EditRecipePage extends React.Component {
  onSubmit = (recipe) => {
    this.props.startEditRecipe(this.props.recipe.id, recipe);
    this.props.history.push('/');
  };

  onRemove = () => {
    this.props.startRemoveRecipe({ id: this.props.recipe.id });
    this.props.history.push('/');
  };
  
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Grid container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Typography classes={{ root: classes.typographyTitle }} >Edit Recipe</Typography>
            <RecipeForm
              recipe={this.props.recipe}
              onSubmit={this.onSubmit}
            />
            <Button classes={{ label: classes.removeLabel }} onClick={this.onRemove}>Remove Recipe</Button>
        </Grid>
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