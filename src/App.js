import React, { Component } from 'react';
import Header from './components/Header'
import Content from './components/Content'

class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <Header />
          <Content />
        </div>
      </div>
    );
  }
}

export default App;
