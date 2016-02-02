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
    return (
      <div className='app-container group'>
        <CatsIndex
          deleteCat={actions.deleteCat}
          fetchCats={actions.fetchCatsIfNeeded}
          cats={cats}
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
