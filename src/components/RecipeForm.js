import React from 'react';

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

  onNameChange = (e) => {
    const name = e.target.value;
    this.setState(() => ({ name }));
  };

  onIngredientsChange = (e) => {
    const ingredients = e.target.value;
    this.setState(() => ({ ingredients }));
  };

  onInstructionsChange = (e) => {
    const instructions = e.target.value;
    this.setState(() => ({ instructions }));
  };

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
    return (
      <form className='form' onSubmit={this.onSubmit}>
        {this.state.error && <p className='form__error'>{this.state.error}</p>}
        <input
          type="text"
          placeholder="Name"
          autoFocus
          className='text-input'
          value={this.state.name}
          onChange={this.onNameChange}
        />
        <p>please include commas between ingredients</p>
        <input
          type="text"
          placeholder="Ingredients      example: Bacon 2 slices, Lettuce 1 leaf, Tomato 2 slices"
          className='text-input'
          value={this.state.ingredients}
          onChange={this.onIngredientsChange}
        />
        <textarea
          placeholder="Instructions"
          className='text-area'
          value={this.state.instructions}
          onChange={this.onInstructionsChange}
        >
        </textarea>
        <p>please include commas between tags</p>
        <input
          type="text"
          placeholder="Tags     example: Christmas, Dessert, French"
          className='text-input'
          value={this.state.tags}
          onChange={this.onTagsChange}
        />
        <div>
          <button className='button'>Save Recipe</button>
        </div>
      </form>
    )
  }
}

export default RecipeForm;