import React, { Component, PropTypes } from 'react';

export default class CatsIndex extends Component {

  render() {
    const cats = this.props.cats.cats;
    return (
      <div className='cats-index'>

        {cats.map( cat =>
          <CatIndexItem cat={cat} deleteCat={this.props.deleteCat} />
        )}

        <button onClick={ this.props.fetchCats } />

      </div>
    );
  }
}
