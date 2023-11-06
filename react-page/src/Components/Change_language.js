import React, { Component } from 'react';

class LanguageSwitcher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: 'ua', // Початкова мова - українська
    };
  }

  // Функція для зміни мови
  changeLanguage = (newLanguage) => {
    this.setState({ language: newLanguage });
  };

  render() {
    const { language } = this.state;

    return (
      <div>
        {/* Кнопки для зміни мови */}
        <button onClick={() => this.changeLanguage('ua')}>UA</button>
        <button onClick={() => this.changeLanguage('en')}>EN</button>

        {/* Відображення тексту відповідно до вибраної мови */}
        <div className="bold">
          {language === 'ua' ? 'Український текст' : 'English Text'}
        </div>
      </div>
    );
  }
}

export default LanguageSwitcher;
