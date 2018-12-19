import React from 'react';
import { connect } from 'react-redux';
import RecipeListItem from './RecipeListItem';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';

const styles = theme => ({
  root: {
    maxWidth: '960px',
    margin: 'auto',
    boxShadow: 'none',
    textAlign: 'left',
    background: 'none'
  },
  noRecipes: {
    fontSize: '20px',
    marginLeft: '20px'
  }
});

export const RecipeList = (props) => {
  const { classes } = props;

  return (
  <div>
    <Paper classes={{ root: classes.root }}>
      {
        props.recipes.length === 0 ? (
          <Typography align='center' classes={{ root: classes.noRecipes }}>
            No Recipes Yet! Lets get cooking!
          </Typography>
        ) : (
            props.recipes.map((recipe) => {
              return <RecipeListItem key={recipe.id} {...recipe} />;
            })
          )
      }
    </Paper>
  </div>

  )
}

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes
  };
};

export default connect(mapStateToProps)(withStyles(styles)(RecipeList));

// Material-UI added