import React from 'react';
import './App.css';
import Header from './Components/Header';// Імпортуємо компонент Header
import Deposit from './Components/Deposit';
import Blocks from './Components/Blocks';
import Buttons from './Components/Buttons'; // Імпортуємо компонент Buttons

function App() {
  return (
    <div className="App">
      <Header />
      <Deposit />
      <Blocks />
      <Buttons /> 
    </div>
  );
}

export default App;
