import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    function repeate(){
      for (let i = 0; i < 40; i++) {
        console.log('teste')
      }
    };
    return (
      <div className="raffle">
        <div className="raffle__top">
          <div className="raffle__top-rings">
            <div className="raffle__top-rings--inside"></div>
          </div>
          <div className="raffle__top-rings--right">
            <div className="raffle__top-rings--inside"></div>
          </div>
        </div>
        <div className="raffle__wrapper">
          <div className="raffle__title-card">
            <h1 className="raffle__big-text">CARTELA</h1>
            <h3 className="raffle__normal-text">COM 80 NOMES</h3>
          </div>
          <div className="raffle__reward">
            <span className="raffle__title-reward">PRÊMIO:___________________________</span>
            <span className="raffle__title-description">A primeira foto com o Baby</span>
          </div>
          <div className="raffle__wrapper-genders">
            <div className="raffle__wrapper-boy">
              <ul>
                {repeate()}
                <li className="raffle__selected">
                  <label htmlFor="JAQUELINE">
                    <p className="raffle__name">JAQUELINE</p>
                    <small className="raffle__familiar">Patricia prado</small>
                  </label>
                  <input
                    className="raffle__radio"
                    type="radio"
                    id="JAQUELINE"
                    name="boyName">
                  </input>
                </li>
                <li>
                  <label htmlFor="CAMILA">
                    <p className="raffle__name">CAMILA</p>
                    <small className="raffle__familiar">Vera Patrezze</small>
                  </label>
                  <input
                    className="raffle__radio"
                    type="radio"
                    id="CAMILA"
                    name="boyName">
                  </input>
                </li>
                <li>
                  <p className="raffle__name">Camila</p>
                  <small className="raffle__familiar">Patricia prado</small>
                </li>
                <li>
                  <p className="raffle__name">Camila</p>
                  <small className="raffle__familiar">Patricia prado</small>
                </li>
                <li>
                  <p className="raffle__name">Camila</p>
                  <small className="raffle__familiar">Patricia prado</small>
                </li>
                <li>
                  <p className="raffle__name">Camila</p>
                  <small className="raffle__familiar">Patricia prado</small>
                </li>
                <li>
                  <p className="raffle__name">Camila</p>
                  <small className="raffle__familiar">Patricia prado</small>
                </li>
                <li>
                  <p className="raffle__name">Camila</p>
                  <small className="raffle__familiar">Patricia prado</small>
                </li>
                <li>
                  <p className="raffle__name">Camila</p>
                  <small className="raffle__familiar">Patricia prado</small>
                </li>
                <li className="raffle__selected">
                  <label htmlFor="JAQUELINE">
                    <p className="raffle__name">JAQUELINE</p>
                    <small className="raffle__familiar">Patricia prado</small>
                  </label>
                  <input
                    className="raffle__radio"
                    type="radio"
                    id="JAQUELINE"
                    name="boyName">
                  </input>
                </li>
                <li>
                  <label htmlFor="CAMILA">
                    <p className="raffle__name">CAMILA</p>
                    <small className="raffle__familiar">Vera Patrezze</small>
                  </label>
                  <input
                    className="raffle__radio"
                    type="radio"
                    id="CAMILA"
                    name="boyName">
                  </input>
                </li>
                <li>
                  <p className="raffle__name">Camila</p>
                  <small className="raffle__familiar">Patricia prado</small>
                </li>
                <li>
                  <p className="raffle__name">Camila</p>
                  <small className="raffle__familiar">Patricia prado</small>
                </li>
                <li>
                  <p className="raffle__name">Camila</p>
                  <small className="raffle__familiar">Patricia prado</small>
                </li>
                <li>
                  <p className="raffle__name">Camila</p>
                  <small className="raffle__familiar">Patricia prado</small>
                </li>
                <li>
                  <p className="raffle__name">Camila</p>
                  <small className="raffle__familiar">Patricia prado</small>
                </li>
                <li>
                  <p className="raffle__name">Camila</p>
                  <small className="raffle__familiar">Patricia prado</small>
                </li>
                <li>
                  <p className="raffle__name">Camila</p>
                  <small className="raffle__familiar">Patricia prado</small>
                </li>
                <li>
                  <p className="raffle__name">Camila</p>
                  <small className="raffle__familiar">Patricia prado</small>
                </li>
                <li>
                  <p className="raffle__name">Camila</p>
                  <small className="raffle__familiar">Patricia prado</small>
                </li>
                <li>
                  <p className="raffle__name">Jaqueline</p>
                  <small className="raffle__familiar">Patricia prado</small>
                </li>
                <li>
                  <p className="raffle__name">Camila</p>
                  <small className="raffle__familiar">Patricia prado</small>
                </li>
                <li>
                  <p className="raffle__name">Camila</p>
                  <small className="raffle__familiar">Patricia prado</small>
                </li>
                <li>
                  <p className="raffle__name">Camila</p>
                  <small className="raffle__familiar">Patricia prado</small>
                </li>
                <li>
                  <p className="raffle__name">Camila</p>
                  <small className="raffle__familiar">Patricia prado</small>
                </li>
                <li>
                  <p className="raffle__name">Camila</p>
                  <small className="raffle__familiar">Patricia prado</small>
                </li>
                <li>
                  <p className="raffle__name">Camila</p>
                  <small className="raffle__familiar">Patricia prado</small>
                </li>
                <li>
                  <p className="raffle__name">Camila</p>
                  <small className="raffle__familiar">Patricia prado</small>
                </li>
                <li>
                  <p className="raffle__name">Camila</p>
                  <small className="raffle__familiar">Patricia prado</small>
                </li>
                <li>
                  <p className="raffle__name">Camila</p>
                  <small className="raffle__familiar">Patricia prado</small>
                </li>
                <li>
                  <p className="raffle__name">Jaqueline</p>
                  <small className="raffle__familiar">Patricia prado</small>
                </li>
                <li>
                  <p className="raffle__name">Camila</p>
                  <small className="raffle__familiar">Patricia prado</small>
                </li>
                <li>
                  <p className="raffle__name">Camila</p>
                  <small className="raffle__familiar">Patricia prado</small>
                </li>
                <li>
                  <p className="raffle__name">Camila</p>
                  <small className="raffle__familiar">Patricia prado</small>
                </li>
                <li>
                  <p className="raffle__name">Camila</p>
                  <small className="raffle__familiar">Patricia prado</small>
                </li>
                <li>
                  <p className="raffle__name">Camila</p>
                  <small className="raffle__familiar">Patricia prado</small>
                </li>
                <li>
                  <p className="raffle__name">Camila</p>
                  <small className="raffle__familiar">Patricia prado</small>
                </li>
                <li>
                  <p className="raffle__name">Camila</p>
                  <small className="raffle__familiar">Patricia prado</small>
                </li>
                <li>
                  <p className="raffle__name">Camila</p>
                  <small className="raffle__familiar">Patricia prado</small>
                </li>
                <li>
                  <p className="raffle__name">Camila</p>
                  <small className="raffle__familiar">Patricia prado</small>
                </li>
              </ul>
            </div>
            <div className="raffle__wrapper-girl">
              <ul>
              <li>
                  <p className="raffle__name">Jaqueline</p>
                  <small className="raffle__familiar">Patricia prado</small>
                </li>
                <li>
                  <p className="raffle__name">Camila</p>
                  <small className="raffle__familiar">Patricia prado</small>
                </li>
                <li>
                  <p className="raffle__name">Camila</p>
                  <small className="raffle__familiar">Patricia prado</small>
                </li>
                <li>
                  <p className="raffle__name">Camila</p>
                  <small className="raffle__familiar">Patricia prado</small>
                </li>
                <li>
                  <p className="raffle__name">Camila</p>
                  <small className="raffle__familiar"></small>
                </li>
                <li className="raffle__selected">
                  <label htmlFor="JAQUELINE">
                    <p className="raffle__name">JAQUELINE</p>
                    <small className="raffle__familiar">Patricia prado</small>
                  </label>
                  <input
                    className="raffle__radio"
                    type="radio"
                    id="JAQUELINE"
                    name="boyName">
                  </input>
                </li>
                <li>
                  <label htmlFor="CAMILA">
                    <p className="raffle__name">CAMILA</p>
                    <small className="raffle__familiar">Guilherme Patrezze</small>
                  </label>
                  <input
                    className="raffle__radio"
                    type="radio"
                    id="CAMILA"
                    name="boyName">
                  </input>
                </li>
                <li>
                  <p className="raffle__name">Camila</p>
                  <small className="raffle__familiar">Patricia prado</small>
                </li>
                <li>
                  <p className="raffle__name">Camila</p>
                  <small className="raffle__familiar">Patricia prado</small>
                </li>
                <li>
                  <p className="raffle__name">Camila</p>
                  <small className="raffle__familiar">Patricia prado</small>
                </li>
                <li>
                  <p className="raffle__name">Jaqueline</p>
                  <small className="raffle__familiar">Patricia prado</small>
                </li>
                <li>
                  <p className="raffle__name">Camila</p>
                  <small className="raffle__familiar">Patricia prado</small>
                </li>
                <li>
                  <p className="raffle__name">Camila</p>
                  <small className="raffle__familiar">Patricia prado</small>
                </li>
                <li>
                  <p className="raffle__name">Camila</p>
                  <small className="raffle__familiar">Patricia prado</small>
                </li>
                <li>
                  <p className="raffle__name">Camila</p>
                  <small className="raffle__familiar">Patricia prado</small>
                </li>
                <li>
                  <p className="raffle__name">Camila</p>
                  <small className="raffle__familiar">Patricia prado</small>
                </li>
                <li>
                  <p className="raffle__name">Camila</p>
                  <small className="raffle__familiar"></small>
                </li>
                <li>
                  <p className="raffle__name">Camila</p>
                  <small className="raffle__familiar">Patricia prado</small>
                </li>
                <li>
                  <p className="raffle__name">Camila</p>
                  <small className="raffle__familiar">Patricia prado</small>
                </li>
                <li>
                  <p className="raffle__name">Camila</p>
                  <small className="raffle__familiar">Patricia prado</small>
                </li>
                <li>
                  <p className="raffle__name">Jaqueline</p>
                  <small className="raffle__familiar">Patricia prado</small>
                </li>
                <li>
                  <p className="raffle__name">Camila</p>
                  <small className="raffle__familiar">Patricia prado</small>
                </li>
                <li>
                  <p className="raffle__name">Camila</p>
                  <small className="raffle__familiar">Patricia prado</small>
                </li>
                <li>
                  <p className="raffle__name">Camila</p>
                  <small className="raffle__familiar">Patricia prado</small>
                </li>
                <li>
                  <p className="raffle__name">Camila</p>
                  <small className="raffle__familiar">Patricia prado</small>
                </li>
                <li>
                  <p className="raffle__name">Camila</p>
                  <small className="raffle__familiar">Patricia prado</small>
                </li>
                <li>
                  <p className="raffle__name">Camila</p>
                  <small className="raffle__familiar">Patricia prado</small>
                </li>
                <li>
                  <p className="raffle__name">Camila</p>
                  <small className="raffle__familiar">Patricia prado</small>
                </li>
                <li>
                  <p className="raffle__name">Camila</p>
                  <small className="raffle__familiar">Patricia prado</small>
                </li>
                <li>
                  <p className="raffle__name">Camila</p>
                  <small className="raffle__familiar">Patricia prado</small>
                </li>
                <li>
                  <p className="raffle__name">Jaqueline</p>
                  <small className="raffle__familiar">Patricia prado</small>
                </li>
                <li>
                  <p className="raffle__name">Camila</p>
                  <small className="raffle__familiar">Patricia prado</small>
                </li>
                <li>
                  <p className="raffle__name">Camila</p>
                  <small className="raffle__familiar">Patricia prado</small>
                </li>
                <li>
                  <p className="raffle__name">Camila</p>
                  <small className="raffle__familiar"></small>
                </li>
                <li>
                  <p className="raffle__name">Camila</p>
                  <small className="raffle__familiar">Patricia prado</small>
                </li>
                <li>
                  <p className="raffle__name">Camila</p>
                  <small className="raffle__familiar">Patricia prado</small>
                </li>
                <li>
                  <p className="raffle__name">Camila</p>
                  <small className="raffle__familiar">Patricia prado</small>
                </li>
                <li>
                  <p className="raffle__name">Camila</p>
                  <small className="raffle__familiar">Patricia prado</small>
                </li>
                <li>
                  <p className="raffle__name">Camila</p>
                  <small className="raffle__familiar"></small>
                </li>
                <li>
                  <p className="raffle__name">Camila</p>
                  <small className="raffle__familiar">Patricia prado</small>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
