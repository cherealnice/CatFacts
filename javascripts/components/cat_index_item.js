import React, { Component, PropTypes } from 'react';
import $ from 'jquery';

export default class CatIndexItem extends Component {

  constructor(props) {
    super(props);

    this._onDragEnd = this._onDragEnd.bind(this);
  }

  _onDragEnd(e) {
    e.preventDefault();
    const upTarget = document.getElementsByClassName('dragging')[0];
    const downTarget = document.getElementsByClassName('hovering')[0];
    this.props.moveCat(upTarget.id, downTarget.id);
    upTarget.classList.remove('dragging');
    downTarget.classList.remove('hovering');
  }

  _onDragStart(e) {
    e.currentTarget.classList.add('dragging');
  }

  _onDragLeave(e) {
    e.preventDefault();
    e.currentTarget.classList.remove('hovering');
  }

  _onDragOver(e) {
    e.preventDefault();
    if (!e.currentTarget.classList.contains('dragging')) {
      e.currentTarget.classList.add('hovering');
    }
  }

  render() {
    const { cat, deleteCat } = this.props;

    return (
      <div
        draggable='true'
        onDrop={ this._onDragEnd }
        onDragStart={ this._onDragStart }
        onDragLeave={ this._onDragLeave }
        onDragOver={ this._onDragOver }
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
