import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    paperWrapper: {
        maxWidth: '960px',
        margin: 'auto',
        paddingLeft: '20px',
        paddingTop: '20px'
    },
    gridTitle: {

    }
});

export const ViewRecipePage = (props) => {
    const { classes } = props;

    return (
        <div>
            <Paper classes={{ root: classes.paperWrapper }}>
            <Grid
            container
            direction="column"
            justify="center"
            alignItems="flex-start"
            >
                    <Grid xs={12} item>
                        <Typography variant='h2'>{props.recipe.name}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography>{props.recipe.ingredients}</Typography>
                        <Typography>{props.recipe.instructions}</Typography>
                        <Typography>{props.recipe.tags}</Typography>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
};

const mapStateToProps = (state, props) => ({
    recipe: state.recipes.find((recipe) => recipe.id === props.match.params.id)
});

export default connect(mapStateToProps)(withStyles(styles)(ViewRecipePage));

// Center name
// unordered list of ingredients seperated by there commas
// instructions
// tags italicized