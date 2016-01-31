import React, { Component, PropTypes } from 'react';

class CatsIndex extends Component {

  render() {
    const { cats } = this.props;
    return (
      <p>
        Clicked: {value} times
        {' '}
        <button onClick={onIncrement}>
          +
        </button>
        {' '}
        <button onClick={onDecrement}>
          -
        </button>
        {' '}
        <button onClick={this.incrementIfOdd}>
          Increment if odd
        </button>
        {' '}
        <button onClick={this.incrementAsync}>
          Increment async
        </button>
      </p>
    );
  }
}

CatsIndex.propTypes = {
  images: PropTypes.array.isRequired,
  facts: PropTypes.array.isRequires,
  onDelete: PropTypes.func.isRequired
};

export default Counter;
