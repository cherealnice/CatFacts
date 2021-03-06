import React, { Component, PropTypes } from 'react';

export default class Header extends Component {

  render() {
    const { sorted, toggleSort } = this.props;

    return (
      <header className='app-header'>
        <section className='header-nav group'>


          <h1>Cat Facts</h1>

          <div className='options'>

            <input
              id='sort-cats'
              type='checkbox'
              onChange={ toggleSort }
              selected={ sorted }
            />

            <label htmlFor='sort-cats'>Sort Cats By Fact Length!</label>

          </div>
        </section>
      </header>
    );
  }
}
