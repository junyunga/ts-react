import * as React from 'react';
import './App.scss';
import HeaderLayout from 'layout/headerLayout';
import MainLayout from 'layout/mainLayout';
import BottomLayout from 'layout/bottomLayout';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <HeaderLayout />
        <MainLayout />
        <BottomLayout />
      </div>
    );
  }
}

export default App;
