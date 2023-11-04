import React from 'react';
import cashImage from '../Images/cash.jpeg';

function Blocks() {
  return (
    <div className="blocks">
      <div className="block-container">
        <div className="gray-block">
          <div className="image-container">
            <img src={cashImage} alt="Cash" className="centered-image" />
            <p className="image-text">
              Покладіть кошти в купюроприймач<br />
              та натисніть кнопку<strong> ДОДАТИ КОШТИ</strong>
            </p>
            <p className="image-description">
              200 купюр максимум
            </p>
          </div>
        </div>
      </div>
      <div className="block-container">
        <div className="white-block">
          <p className="white-block-text">СУМА ДО ВНЕСЕННЯ</p>
          <p className="top">24700 UAN</p>
          <p className="center1-text underline">Внесена сума</p>
          <p className="center2-text"><strong>0</strong> UAN</p>
          <p className="center3-text underline">Необхідно додати</p>
          <p className="center4-text"><strong>24700</strong> UAN</p>
          <p className="center5-text underline">Решта</p>
          <p className="center6-text"><strong>0</strong> UAN</p>
          <p className="center7-text underline">Ліміт для внесення</p>
          <p className="center8-text">25200 UAN</p>
          <p className="bottom-text">Сума до видачі</p>
          <p className="bottom"><strong>1000</strong> USD</p>
        </div>
      </div>
    </div>
  );
}

export default Blocks;
