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
        marginLeft: '20px',
        marginRight: '20px'
    },
    typographyPaper: {
        boxShadow: 'none',
        marginLeft: '20px',
        [theme.breakpoints.only('xs')]: {
            textAlign: 'center'
        }
    },
    typographyTitle: {
        fontSize: '20px',
    },
    typographyTags: {
        fontSize: '15px',
    },
    editButtonLabel: {
        fontSize: '10px',
        textDecoration: 'none',
        color: '#e6e6e6'
    },
    editButtonRoot: {
        backgroundColor: '#3f51b5', 
        padding: '10px', 
        marginRight: '20px',
        [theme.breakpoints.only('xs')]: {
            margin: 'auto',
            padding: '20px'
        }
    },
    editButtonGrid: {
        [theme.breakpoints.only('xs')]: {
            marginTop: '20px'
        }
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
                        <Paper classes={{ root: classes.typographyPaper }}>
                            <Typography classes={{ root: classes.typographyTitle }}>{name}</Typography>
                            <Typography classes={{ root: classes.typographyTags }}>{tags}</Typography>
                        </Paper>
                    </Grid>
                    <Grid xs={12} sm={2} item classes={{ item: classes.editButtonGrid }}>
                        <Paper style={{ boxShadow: 'none', textAlign: 'center' }}>
                            <Link style={{ textDecoration: 'none' }} to={`/edit/${id}`}>
                                <Button classes={{ root: classes.editButtonRoot, label: classes.editButtonLabel }} >Edit Recipe</Button>
                            </Link>
                        </Paper>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}

export default withStyles(styles)(RecipeListItem);