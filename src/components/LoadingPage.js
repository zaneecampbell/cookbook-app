import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    loaderDiv: {
        alignItems: 'center',
        display: 'flex',
        height: '100vh',
        justifyContent: 'center',
        width: '100vw'
    },
    image: {
        height: '6rem',
        weight: '6rem'
    }
})

// Loading gif
export const LoadingPage = (props) => {
    const { classes } = props;

    return (
        <div className={ classes.loaderDiv }>
            <img className={ classes.image } src='/images/loading.gif' />
        </div>
    )
}


export default withStyles(styles)(LoadingPage);

// done