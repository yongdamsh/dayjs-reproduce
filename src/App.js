import React, { Component } from 'react';
import { DayPickerRangeController } from 'react-dates';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DayPickerRangeController />
      </div>
    );
  }
}

export default App;
