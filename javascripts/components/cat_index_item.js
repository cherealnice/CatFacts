import React, { Component, PropTypes } from 'react';

export default class CatIndexItem extends Component {

  render() {
    const cat = this.props.cat;
    const fact = cat.fact;
    const id = this.props.id;
    const deleteCat = this.props.deleteCat;

    return (
      <div className='cat-index-item'>
        <div className='flipper'>
          <div className='front'>

            <div className='cat-image'>
              <img key={'image' + id} src={cat.url} />
            </div>

          </div>

          <div className='back'>

            <div className='cat-fact'>
              <div className='fact-wrapper'>
                <h5>Fact:</h5>
                <p key={'fact' + id}>{fact}</p>
              </div>
            </div>

            <a
              className='delete-cat fa fa-trash-o'
              onClick={deleteCat.bind(null, id)}
            />

          </div>
        </div>
      </div>
    );
  }
}
