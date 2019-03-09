import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Button from '@/components/Button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button>My very first button</Button>
      </div>
    );
  }
}

export default (process.env.NODE_ENV === 'development'
  ? hot(module)(App)
  : App);
