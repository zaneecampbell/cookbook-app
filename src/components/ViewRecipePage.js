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
    const ingredients = props.recipe.ingredients.split(', ')

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
                        <Typography style={{fontSize: '10px'}} variant="overline">Tags: {props.recipe.tags}</Typography>
                        <br />
                    </Grid>
                    <Grid item>
                        <Typography variant='h3'>
                            Ingredients:
                        </Typography>
                        <Typography variant='h3'>
                            {
                                ingredients.map((ingredient) => {
                                    return <li key={ingredient}> {ingredient} </li>
                                })
                            }
                        </Typography>
                        <br />
                        <Typography variant='h3'>
                            Instructions:
                        </Typography>
                        <Typography variant='h3'>
                            &nbsp;&nbsp;&nbsp;&nbsp;{props.recipe.instructions}
                        </Typography>
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

// done