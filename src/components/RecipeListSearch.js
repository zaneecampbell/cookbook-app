import React from 'react';
import { connect } from 'react-redux';
import { setTextSearch, setTagsSearch } from '../actions/search';

export class RecipeListSearch extends React.Component {
  state = {

  };

  onTextChange = (e) => {
    this.props.setTextSearch(e.target.value);
  };

  onTagsSearchChange = (e) => {
    this.props.setTagsSearch(e.target.value);
  };

  render() {
    return (
        <div>
            <div>
                <input
                type="text"
                className="text-input"
                placeholder='Search by recipe name'
                value={this.props.search.text}
                onChange={this.onTextChange}
                />
            </div>
            <br />
            <div>
                <input
                type="text"
                className="text-input"
                placeholder='Search by recipe tags'
                value={this.props.search.tags}
                onChange={this.onTagsSearchChange}
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

export default connect(mapStateToProps, mapDispatchToProps)(RecipeListSearch);

// done