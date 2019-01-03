import React from 'react';
import { Link } from 'react-router-dom';
import RecipeList from './RecipeList';
import RecipeListSearch from './RecipeListSearch';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  buttonLabel: {
    fontSize: '20px',
    color: '#e6e6e6'
  },
  paperWrapper: {
    boxShadow: 'none',
    paddingTop: '30px',
    textAlign: 'center',
    backgroundColor: '#e6e6e6',
  }
});

const CookBookPage = (props) => {
  const { classes } = props;

  return (
  <Paper className={classes.paperWrapper}>
    <Link style={{ textDecoration: 'none' }} to='/create'>
      <Button style={{ backgroundColor: '#3f51b5', padding: '20px', marginBottom: '20px' }} classes={{ label: classes.buttonLabel }}>Add New Recipe</Button>
    </Link>
    <RecipeListSearch />
    <RecipeList />
  </Paper>
  )
}

export default withStyles(styles)(CookBookPage);

// Material-UI Added
