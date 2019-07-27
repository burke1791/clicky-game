import React, { Component } from 'react';
import Header from './components/header';
import Jumbotron from './components/jumbotron';
import Main from './components/main';
import Footer from './components/footer';

class App extends Component {
  
  
  render() {
    return (
      <div className="App">
        <Header />
        <Jumbotron />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
