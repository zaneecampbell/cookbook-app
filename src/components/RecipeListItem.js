import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    paperWrapper: {
        paddingTop: '10px',
        paddingBottom: '10px',
        margin: '20px'
    },
    typographyTitle: {
        fontSize: '20px',
        marginLeft: '20px'
    },
    typographyTags: {
        fontSize: '15px',
        marginLeft: '20px'
    },
    editButtonLabel: {
        fontSize: '10px',
        textDecoration: 'none',
        color: '#e6e6e6'
    }
});

const RecipeListItem = ({ id, name, ingredients, instructions, tags, classes }) => {

    return (
        <div>
            <Paper classes={{ root: classes.paperWrapper }}>
                <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                >
                    <Grid xs={10} item>
                        <Paper style={{ boxShadow: 'none' }}>
                            <Typography classes={{ root: classes.typographyTitle }}>{name}</Typography>
                            <Typography classes={{ root: classes.typographyTags }}>{tags}</Typography>
                        </Paper>
                    </Grid>
                    <Grid xs={2} item>
                        <Paper style={{ boxShadow: 'none' }}>
                            <Link style={{ textDecoration: 'none' }} to={`/edit/${id}`}>
                                <Button style={{ backgroundColor: '#3f51b5', padding: '10px', marginRight: '10px' }} classes={{ label: classes.editButtonLabel }} >Edit Recipe</Button>
                            </Link>
                        </Paper>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}

export default withStyles(styles)(RecipeListItem);