import React, { Component, PropTypes } from 'react';
import $ from 'jquery';

export default class CatIndexItem extends Component {

  render() {
    const { cat, deleteCat, hoverActions } = this.props;

    return (
      <div
        draggable='true'
        onDrop={ hoverActions._onDrop }
        onDragStart={ hoverActions._onDragStart }
        onDragLeave={ hoverActions._onDragLeave }
        onDragOver={ hoverActions._onDragOver }
        id={cat.id}
        className='cat-index-item'
      >

        <div className='flipper'>
          <div className='front'>

            <div className='cat-image'>
              <img key={ 'image' + cat.id } src={ cat.url } />
            </div>

          </div>

          <div className='back'>
            <div className='cat-fact'>
              <div className='fact-wrapper'>

                <a
                className='delete-cat fa fa-trash-o'
                onClick={ deleteCat.bind(null, cat.id) }
                />

                <h5>Fact:</h5>
                <p key={ 'fact' + cat.id }>{ cat.fact }</p>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
