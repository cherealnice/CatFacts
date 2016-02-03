import React, { Component, PropTypes } from 'react';

export default class CatIndexItem extends Component {

  render() {
    const cat = this.props.cat;
    const shortFact = cat.fact.slice(0, 50) + '...';
    const id = this.props.id;
    const deleteCat = this.props.deleteCat;

    return (
      <div className='cat-index-item'>

        <div className='cat-image'>
          <img key={'image' + id} src={cat.url} />
        </div>

        <div className='cat-fact'>
          <p key={'fact' + id}>{shortFact}</p>
        </div>

        <button onClick={deleteCat.bind(null, id)}> Delete this cat :( </button>

      </div>
    );
  }
}
