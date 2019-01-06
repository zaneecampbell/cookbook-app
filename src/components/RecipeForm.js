import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  removeLabel: {
    fontSize: '20px',
    textDecoration: 'none',
    color: '#e6e6e6'
  }
});

export class RecipeForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.recipe ? props.recipe.name : '',
      ingredients: props.recipe ? props.recipe.ingredients : '',
      instructions: props.recipe ? props.recipe.instructions : '',
      tags: props.recipe ? props.recipe.tags: '',
      error: ''
    };
  }

  // typing in the field changes the name
  onNameChange = (e) => {
    const name = e.target.value;
    this.setState(() => ({ name }));
  };

  // typing in the field changes the ingredients
  onIngredientsChange = (e) => {
    const ingredients = e.target.value;
    this.setState(() => ({ ingredients }));
  };

  // typing in the field changes the instructions
  onInstructionsChange = (e) => {
    const instructions = e.target.value;
    this.setState(() => ({ instructions }));
  };

  // typing in the field changes the tags
  onTagsChange = (e) => {
    const tags = e.target.value;
    this.setState(() => ({ tags }));
  };

  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.name || !this.state.ingredients || !this.state.instructions) {
      this.setState(() => ({ error: 'Please give your recipe a name, include all ingredients, and some simple instructions!' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        name: this.state.name,
        ingredients: this.state.ingredients,
        instructions: this.state.instructions,
        tags: this.state.tags
      });
    }
  };
  
  render() {
    const { classes } = this.props;
    return (
      <form onSubmit={this.onSubmit}>
        {this.state.error && <p>{this.state.error}</p>}
        <TextField
          type="text"
          placeholder="Name"
          autoFocus
          value={this.state.name}
          onChange={this.onNameChange}
          variant='filled'
        />
        <p>please include commas between ingredients</p>
        <TextField
          type="text"
          placeholder="Ingredients      example: Bacon 2 slices, Lettuce 1 leaf, Tomato 2 slices"
          value={this.state.ingredients}
          onChange={this.onIngredientsChange}
          variant='filled'
        />
        <TextField
          placeholder="Instructions"
          multiline
          rowsMax="4"
          value={this.state.instructions}
          onChange={this.onInstructionsChange}
          variant='filled'
        />
        <p>please include commas between tags</p>
        <TextField
          type="text"
          placeholder="Tags     example: Christmas, Dessert, French"
          value={this.state.tags}
          onChange={this.onTagsChange}
          variant='filled'
        />
        <div>
          <Button type='submit' style={{ backgroundColor: '#3f51b5' }} classes={{ label: classes.removeLabel }}>Save Recipe</Button>
        </div>
      </form>
    )
  }
}

export default withStyles(styles)(RecipeForm);

// needs formatting