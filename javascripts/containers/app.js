import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';
import CatsIndex from '../components/cats_index';
import Header from '../components/header';
import {
    sortCats,
    dragStart,
    dragEnd,
    dragEnter,
    dragLeave
} from '../util/util';

class App extends Component {

  componentDidMount() {
    this.props.actions.fetchCatsIfNeeded();
  }

  render() {
    const {
      cats,
      filters,
      sortedCats,
      actions,
      dragUtil
    } = this.props;

    const showCats = filters.sorted ? sortedCats : cats;

    return (
      <div className='app-container group'>
        <Header
          sorted={ filters.sorted }
          toggleSort={ actions.toggleSort }
        />

        <CatsIndex
          cats={ showCats }
          deleteCat={ actions.deleteCat }
          fetchCats={ actions.fetchCatsIfNeeded }
          fetching={ filters.fetching }
          toggleSort={ actions.toggleSort }
          moveCat={ actions.moveCat }
        />

      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return Object.assign({}, state, {
    sortedCats: sortCats(state.cats),
    dragUtil: {
      dragStart: dragStart,
      dragEnd: dragEnd,
      dragEnter: dragEnter,
      dragLeave: dragLeave
    }
  });
};

const mapDispatchToProps = function(dispatch) {
  return { actions: bindActionCreators(actionCreators, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
