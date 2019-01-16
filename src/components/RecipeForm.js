import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';

const styles = theme => ({
  formContainer: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center'
  },
  formDefault: {
    display: 'flex',
    flexDirection: 'column'
  },
  inputTextSize: {
    fontSize: '30px'
  },
  inputTextSizeInstructions: {
    lineHeight: '30px',
    fontSize: '30px'
  },
  paperWrapper: {
    width: '960px',
    padding: '10px',
    marginLeft: '20px',
    marginRight: '20px',
    textAlign: 'left'
},
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
      ingredients: props.recipe ? props.recipe.ingredients : ['', '', ''],
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
    const ingredient = e.target.value;
    const id = e.target.id;

    this.setState({
      ...this.state.ingredients[id].concat(ingredient)
    });

    this.state.ingredients[id] = ingredient
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
      <div className={ classes.formContainer }>
        <Paper classes={{ root: classes.paperWrapper }}>
          <form className={ classes.formDefault } onSubmit={this.onSubmit}>
            {this.state.error && <p>{this.state.error}</p>}
            <Typography style={{fontSize: '35px'}}>Name</Typography>
            <TextField
              type="text"
              placeholder="E.g. BLT"
              autoFocus
              value={this.state.name}
              onChange={this.onNameChange}
              variant='filled'
              InputProps={{
                classes: {
                  input: classes.inputTextSize
                }
              }}
            />
            <br />
            <Typography style={{fontSize: '35px'}}>Ingredients</Typography>
            <Typography style={{fontSize: '15px'}}>(please include commas between ingredients)</Typography>
            {this.state.ingredients.map((ingredient, idx) => (
              <TextField 
                key={idx}
                id={`${idx}`}
                type='text'
                value={ingredient}
                placeholder={`${idx + 1}`}
                onChange={this.onIngredientsChange}
                InputProps={{
                  classes: {
                    input: classes.inputTextSize
                  }
                }}
                variant='filled'
                autoComplete='off'
              />
            ))}
            {/* <TextField
              type="text"
              placeholder="E.g. Bacon 2 slices, Lettuce 1 leaf, Tomato 2 slices, Bread 2 slices"
              value={this.state.ingredients}
              onChange={this.onIngredientsChange}
              variant='filled'
              InputProps={{
                classes: {
                  input: classes.inputTextSize
                }
              }}
            /> */}
            <br />
            <Typography style={{fontSize: '35px'}}>Instructions</Typography>
            <Typography style={{fontSize: '15px'}}>(please include commas between steps)</Typography>
            <TextField
              placeholder="E.g.
                           Step 1: Cut Bread
                           Step 2: Stack ingredients on Bread
                           Step 3: Enclose with other slice of Bread
                           Step 4: Enjoy!"
              multiline
              rows='50'
              rowsMax='1000'
              value={this.state.instructions}
              onChange={this.onInstructionsChange}
              variant='filled'
              InputProps={{
                classes: {
                  inputMultiline: classes.inputTextSizeInstructions
                }
              }}
            />
            <br />
            <Typography style={{fontSize: '35px'}}>Tags</Typography>
            <TextField
              type="text"
              placeholder="E.g. Christmas, Dessert, French"
              value={this.state.tags}
              onChange={this.onTagsChange}
              variant='filled'
              InputProps={{
                classes: {
                  input: classes.inputTextSize
                }
              }}
            />
            <div>
              <br />
              <Button type='submit' style={{ backgroundColor: '#3f51b5' }} classes={{ label: classes.removeLabel }}>Save Recipe</Button>
            </div>
          </form>
        </Paper>
      </div>
    )
  }
}

export default withStyles(styles)(RecipeForm);

// format instructions and ingredients to allow you to input ingredients/steps in seperate boxes then combine for redux/firebase then unfold later