import React, { Component, PropTypes } from 'react';
import CatIndexItem from './cat_index_item';

export default class CatsIndex extends Component {

  render() {
    const {
      cats,
      fetching,
      deleteCat,
      fetchCats
    } = this.props;

    return (
      <div className='cats-container'>
        <div className='cats-index group'>

          {cats.map( (cat, i) =>
            <CatIndexItem
            cat={ cat }
            key={ i }
            id={ i }
            deleteCat={ deleteCat } />
          )}

        </div>
          <button className='fetch-cats-button'
          onClick={ fetchCats }
          disabled={ fetching }
          >
          More Cats!
          </button>
      </div>
    );
  }
}
