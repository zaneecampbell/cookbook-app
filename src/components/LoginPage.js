import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    buttonRoot: {
        margin: 'auto',
        fontSize: '1.5vw',
        color: '#e6e6e6'
    }
});

// Just a login button
export const LoginPage = (props) => {
    const { classes } = props;
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Button classes={{ root: classes.buttonRoot }} onClick={props.startLogin}>Login</Button>
                </Toolbar>
            </AppBar>
            <div>
                <Paper style={{alignItems: 'center', paddingTop: '25px', paddingBottom: '25px'}}>
                    <Typography variant='h2' style={{textAlign: 'center'}}> At the moment gmail accounts are the only ones supported more to come.</Typography>
                </Paper>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(withStyles(styles)(LoginPage));

// Material-UI Added