import React from 'react';
import './App.css';
import Header from './Components/Header';
import Deposit from './Components/Deposit';
import Blocks from './Components/Blocks';

function App() {
  return (
    <div className="App">
      <Header />
      <Deposit />
      <Blocks />
    </div>
  );
}

export default App;
