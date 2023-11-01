import React from 'react';
import '../App.css';
import phoneIcon from '../Images/telephone.jpg';

function Header() {
  return (
    <div className="header">
      <div className="text-container">
        <div className="best-bank">
          <span className="best-text">Best</span>
          <span className="bank-text">Bank</span>
        </div>
        <div className="phone">
          <img src={phoneIcon} alt="Телефон іконка" />
          <span className="phone-number">800 002 03 14</span>
        </div>
      </div>
      <div className="right-align">
        <span className="bold">UA</span> | EN
      </div>
      <div className="deposit">Внесення коштів</div>
      <div className="gray-block">
        {/* Сірий блок */}
      </div>
      <div className="white-block">
        {/* Білий блок */}
      </div>
    </div>
  );
}

export default Header;
