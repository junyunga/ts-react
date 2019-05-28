import * as React from 'react';
import './App.scss';
import HeaderLayout from 'layout/headerLayout';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <HeaderLayout />
      </div>
    );
  }
}

export default App;
