import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';
import CatsIndex from '../components/cats_index';

class App extends Component {

  componentDidMount() {
    this.props.actions.fetchCatsIfNeeded();
  }

  render() {
    const actions = this.props.actions;
    const cats = this.props.cats;
    const fetching = this.props.filters.fetching;
    return (
      <div className='app-container group'>
        <CatsIndex
          deleteCat={actions.deleteCat}
          fetchCats={actions.fetchCatsIfNeeded}
          cats={cats}
          fetching={fetching}
        />
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return state;
};

const mapDispatchToProps = function(dispatch) {
  return { actions: bindActionCreators(actionCreators, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
