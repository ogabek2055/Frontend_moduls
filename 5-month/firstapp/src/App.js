import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';

class App extends React.Component {
  render() {
    return <div>
      <Navbar/>
      <h1>Hello World</h1>
    </div>
  }
}

export default App;
