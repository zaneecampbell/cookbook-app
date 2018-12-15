import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  buttonRoot: {
    fontSize: '20px'
  },
  toolbar: {
    alignItems: 'center'
  }
  
});

export const Header = (props) => {
  const { classes } = props;

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
        >
          <Grid item>
            <Link style={{ textDecoration: 'none' }} to="/cookbook">
              <Typography style={{ fontSize: '20px' }}>CookBook</Typography>
            </Link>
          </Grid>
          <Grid item>
            <Button classes={{ root: classes.buttonRoot }} onClick={props.startLogout}>Logout</Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(withStyles(styles)(Header));
