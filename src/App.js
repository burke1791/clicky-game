import React, { Component } from 'react';
import Header from './components/header/header';
import Jumbotron from './components/jumbotron/jumbotron';
import Main from './components/main/main';

const AppContext = React.createContext();

class App extends Component {
  state = {
    score: 0,
    topScore: 0
  };

  componentDidMount() {
    let userSavedHighScore = localStorage.getItem('topScore') || 0;
    this.setState({
      topScore: userSavedHighScore
    });
  }

  render() {
    return (
      <div className='app'>
        <Header score={this.state.score} topScore={this.state.topScore} />
        <Jumbotron />
        <Main game={game} />
      </div>
    );
  }
}

export default App;