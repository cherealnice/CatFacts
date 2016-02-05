import React, { Component, PropTypes } from 'react';
import CatIndexItem from './cat_index_item';

export default class CatsIndex extends Component {

  constructor(props) {
    super(props);

    this._onDrop = this._onDrop.bind(this);
  }

  _onIndexItemHover(e) {
    debugger;
    e.currentTarget.toggleClass('hovering');
  }

  _onDragStart(e) {
    e.currentTarget.classList.add('dragging');
  }

  _onDrop(e) {
    e.preventDefault();
    const upTarget = document.getElementsByClassName('dragging')[0];
    const downTarget = document.getElementsByClassName('drag-hovering')[0];
    this.props.moveCat(upTarget.id, downTarget.id);
    upTarget.classList.remove('dragging');
    downTarget.classList.remove('drag-hovering');
  }

  _onDragOver(e) {
    e.preventDefault();
    if (!e.currentTarget.classList.contains('dragging')) {
      e.currentTarget.classList.add('drag-hovering');
    }
  }

  _onDragLeave(e) {
    e.preventDefault();
    e.currentTarget.classList.remove('drag-hovering');
  }

  render() {
    const {
      cats,
      fetching,
      deleteCat,
      fetchCats,
      moveCat
    } = this.props;

    const hoverActions = {
      _onDragStart: this._onDragStart,
      _onDrop: this._onDrop,
      _onDragOver: this._onDragOver,
      _onDragLeave: this._onDragLeave
    };

    return (
      <div className='cats-container'>
        <div className='cats-index group'>

          {cats.map( (cat, i) =>
            <CatIndexItem
              cat={ cat }
              key={ i }
              deleteCat={ deleteCat }
              hoverActions={ hoverActions }
              onMouseEnter={ this._onIndexItemHover }
              onMouseLeave={ this._onIndexItemHover }
            />
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
