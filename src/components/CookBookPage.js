import React from 'react';
import { Link } from 'react-router-dom';
import RecipeList from './RecipeList';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  buttonLabel: {
    fontSize: '20px'
  }
});

const CookBookPage = (props) => {
  const { classes } = props;

  return (
  <div>
    <Link style={{ textDecoration: 'none' }} to='/create'>
      <Button classes={{ label: classes.buttonLabel }}>Add Recipe</Button>
    </Link>
    <RecipeList />
  </div>
  )
}

export default withStyles(styles)(CookBookPage);
