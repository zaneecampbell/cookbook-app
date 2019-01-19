import React from 'react';
import { connect } from 'react-redux';
import { setTextSearch, setTagsSearch } from '../actions/search';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';

const styles =  theme => ({
  inputTextSize : {
    fontSize: '30px'
  }
});

export class RecipeListSearch extends React.Component {
  state = {

  };

  onTextChange = (e) => {
    this.props.setTextSearch(e.target.value);
  };

  onTagsSearchChange = (e) => {
    this.props.setTagsSearch(e.target.value);
  };

  // search abilities for quicker searches
  render() {
    const { classes } = this.props;

    return (
        <div>
            <div>
                <Input
                style={{marginLeft: '20px', marginRight: '20px'}}
                type="text"
                placeholder='Search by name'
                value={this.props.search.text}
                onChange={this.onTextChange}
                classes={{ input: classes.inputTextSize }}
                />
            </div>
            <br />
            <div>
                <Input
                style={{marginLeft: '20px', marginRight: '20px'}}
                type="text"
                placeholder='Search by tags'
                value={this.props.search.tags}
                onChange={this.onTagsSearchChange}
                classes={{ input: classes.inputTextSize }}
                />
            </div>
            <br />    
        </div>
    );
  }
};

const mapStateToProps = (state) => ({
  search: state.search,
  tagsSearch: state.tagsSearch
});

const mapDispatchToProps = (dispatch) => ({
  setTextSearch: (text) => dispatch(setTextSearch(text)),
  setTagsSearch: (tags) => dispatch(setTagsSearch(tags))
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(RecipeListSearch));

// Move search fields to left about recipe list names