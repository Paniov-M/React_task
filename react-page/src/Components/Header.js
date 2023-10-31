import React from 'react';
import '../App.css';

function Header() {
  return (
    <div className="header">
      <div className="text-container">
        <span className="best-text">Best</span>
        <span className="bank-text">Bank</span>
      </div>
      <CenteredText text="телефон" />
      <div className="right-align">
        <span className="bold">UA</span> | EN
      </div>
    </div>
  );
}

function CenteredText({ text }) {
  return (
    <div className="center">
      {text}
    </div>
  );
}

export default Header;
