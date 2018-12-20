import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({

});

export const ViewRecipePage = (props) => {
    const { classes } = props;

    return (
        <div>
            <div>{props.recipe.id}</div>
            <div>{props.recipe.name}</div>
            <div>{props.recipe.ingredients}</div>
            <div>{props.recipe.instructions}</div>
            <div>{props.recipe.tags}</div>
        </div>
    )
};

const mapStateToProps = (state, props) => ({
    recipe: state.recipes.find((recipe) => recipe.id === props.match.params.id)
});

export default connect(mapStateToProps)(withStyles(styles)(ViewRecipePage));