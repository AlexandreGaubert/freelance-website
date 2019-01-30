import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <div style={styles.container}>
        <Header/>
      </div>
    );
  }
}

const styles = {
  container: {
    width: '70vw',
    border: '1px solid',
    margin: 'auto'
  }
}

export default App;
