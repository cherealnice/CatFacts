import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';
import CatsIndex from '../components/cats_index';
import Header from '../components/header';

class App extends Component {

  componentDidMount() {
    this.props.actions.fetchCatsIfNeeded();
  }

  render() {
    const actions = this.props.actions;
    const cats = this.props.cats;
    const fetching = this.props.filters.fetching;
    const fetchCats = this.props.actions.fetchCatsIfNeeded;
    return (
      <div className='app-container group'>
        <Header />

        <CatsIndex
          deleteCat={actions.deleteCat}
          cats={cats}
          fetchCats={fetchCats}
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
