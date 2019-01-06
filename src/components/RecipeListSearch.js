import React from 'react';
import { connect } from 'react-redux';
import { setTextSearch } from '../actions/search';

export class RecipeListSearch extends React.Component {
  state = {

  };

  onTextChange = (e) => {
    this.props.setTextSearch(e.target.value);
  };

  render() {
    return (
        <div>
            <div>
                <input
                type="text"
                className="text-input"
                placeholder='Search recipes'
                value={this.props.search.text}
                onChange={this.onTextChange}
                />
                </div>
                <br />
        </div>
    );
  }
};

const mapStateToProps = (state) => ({
  search: state.search
});

const mapDispatchToProps = (dispatch) => ({
  setTextSearch: (text) => dispatch(setTextSearch(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeListSearch);

// done