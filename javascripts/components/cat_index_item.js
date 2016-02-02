import React, { Component, PropTypes } from 'react';

export default class CatIndexItem extends Component {

  render() {
    const cat = this.props.cat;
    const id = this.props.id;
    const deleteCat = this.props.deleteCat;

    return (
      <div className='cats-index'>

      <img key={'image' + id} src={cat.url} />
      <p key={'fact' + id}>{cat.fact}</p>

      <button onClick={deleteCat.bind(null, id)} />

      </div>
    );
  }
}
