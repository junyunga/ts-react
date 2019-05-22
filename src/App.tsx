import * as React from 'react';
import './App.css';
import Test from './layout/test';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Test value="test"/>
      </div>
    );
  }
}

export default App;
