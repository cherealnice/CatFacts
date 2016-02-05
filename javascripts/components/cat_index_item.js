import React, { Component, PropTypes } from 'react';
import $ from 'jquery';

export default class CatIndexItem extends Component {

  constructor(props) {
    super(props);

    this.dragEnd = this.dragEnd.bind(this);
    // this.dragEnter = this.dragEnter.bind(this);
    this.dragLeave = this.dragLeave.bind(this);
  }

  dragEnd() {
    const id = this.props.cat.id;
    const targetId = document.getElementsByClassName('hovering');
    debugger;
    this.props.moveCat(id, target);
    this.hovering = undefined;
  }

  dragEnter(e) {
    e.preventDefault();

    e.currentTarget.classList.add('hovering');
  }

  dragLeave(e) {
    e.preventDefault();
    e.currentTarget.classList.remove('hovering');
  }

  dragOver() {
    return false;
  }

  render() {
    const { cat, deleteCat } = this.props;

    return (
      <div
        draggable='true'
        onDragEnd={ this.dragEnd }
        onDragEnter={ this.dragEnter }
        onDragLeave={ this.dragLeave }
        onDragOver={ this.dragOver }
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
