import React, { Component } from 'react';

class Main extends Component {
  
  generateCards = () => {
    
  }

  render() {
    return (
      <div className='game'>
        {generateCards()}
      </div>
    );
  }
}

export default Main;