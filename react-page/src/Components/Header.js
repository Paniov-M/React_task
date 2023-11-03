import React from 'react';
import '../App.css';
import { FaPhone } from 'react-icons/fa';
import cash_machine from '../Images/cash_machine.png';

function Header() {
  return (
    <div className="header">
      <div className="text-container">
        <div>
          <span className="best-text">Best</span>
          <span className="best-bank">Bank</span>
        </div>
      </div>
      <div className="center phone">
        <FaPhone size={15} />
        <span className="phone-number">800 002 03 14</span>
      </div>
      <div className="right-align">
        <span className="bold">UA</span>
        <span>|EN</span>
      </div>
    </div>
  );
}

export default Header;
