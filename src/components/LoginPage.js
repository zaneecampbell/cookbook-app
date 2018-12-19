import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    buttonRoot: {
        margin: 'auto',
        fontSize: '1.5vw'
    }
});

export const LoginPage = (props) => {
    const { classes } = props;
    console.log(props)
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Button classes={{ root: classes.buttonRoot}} onClick={props.startLogin}>Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(withStyles(styles)(LoginPage));

// material ui added