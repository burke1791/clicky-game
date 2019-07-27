import React, { Component } from 'react';
import './header.css';

class Header extends Component {
  render() {
    return (
      <header className='header'>
        <div className='wrapper'>
          <h2 className='bold'>Clicky Game</h2>
          <h2>Click an image to begin!</h2>
          <h2>Score: {this.props.score} | Top Score: {this.props.topScore}</h2>
        </div>
      </header>
    );
  }
}

export default Header;