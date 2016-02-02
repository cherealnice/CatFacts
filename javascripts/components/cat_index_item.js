import React, { Component, PropTypes } from 'react';

export default class CatIndexItem extends Component {

  render() {
    const cat = this.props.cat;
    return (
      <div className='cats-index'>

      <img key={cat.id} src={cat.url} />

      </div>
    );
  }
}
