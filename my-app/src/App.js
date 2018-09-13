import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
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
                <li className="">
                  <label htmlFor="ALEXANDRE">
                    <p className="raffle__name">ALEXANDRE</p>
                    <small className="raffle__familiar"></small>
                  </label>
                  <input
                    className="raffle__radio"
                    type="radio"
                    id="ALEXANDRE"
                    name="boyName">
                  </input>
                </li>
                <li className="">
                  <label htmlFor="ARTHUR">
                    <p className="raffle__name">ARTHUR</p>
                    <small className="raffle__familiar"></small>
                  </label>
                  <input
                    className="raffle__radio"
                    type="radio"
                    id="ARTHUR"
                    name="boyName">
                  </input>
                </li>
                <li className="">
                  <label htmlFor="BENICIO">
                    <p className="raffle__name">BENICIO</p>
                    <small className="raffle__familiar"></small>
                  </label>
                  <input
                    className="raffle__radio"
                    type="radio"
                    id="BENICIO"
                    name="boyName">
                  </input>
                </li>
                <li className="">
                  <label htmlFor="BENJAMIM">
                    <p className="raffle__name">BENJAMIM</p>
                    <small className="raffle__familiar"></small>
                  </label>
                  <input
                    className="raffle__radio"
                    type="radio"
                    id="BENJAMIM"
                    name="boyName">
                  </input>
                </li>
                <li className="">
                  <label htmlFor="BENTO">
                    <p className="raffle__name">BENTO</p>
                    <small className="raffle__familiar"></small>
                  </label>
                  <input
                    className="raffle__radio"
                    type="radio"
                    id="BENTO"
                    name="boyName">
                  </input>
                </li>
                <li className="">
                  <label htmlFor="BERNARDO">
                    <p className="raffle__name">BERNARDO</p>
                    <small className="raffle__familiar"></small>
                  </label>
                  <input
                    className="raffle__radio"
                    type="radio"
                    id="BERNARDO"
                    name="boyName">
                  </input>
                </li>
                <li className="">
                  <label htmlFor="BRUNO">
                    <p className="raffle__name">BRUNO</p>
                    <small className="raffle__familiar"></small>
                  </label>
                  <input
                    className="raffle__radio"
                    type="radio"
                    id="BRUNO"
                    name="boyName">
                  </input>
                </li>
                <li className="">
                  <label htmlFor="CAIO">
                    <p className="raffle__name">CAIO</p>
                    <small className="raffle__familiar"></small>
                  </label>
                  <input
                    className="raffle__radio"
                    type="radio"
                    id="CAIO"
                    name="boyName">
                  </input>
                </li>
                <li className="">
                  <label htmlFor="DANIEL">
                    <p className="raffle__name">DANIEL</p>
                    <small className="raffle__familiar"></small>
                  </label>
                  <input
                    className="raffle__radio"
                    type="radio"
                    id="DANIEL"
                    name="boyName">
                  </input>
                </li>
                <li className="">
                  <label htmlFor="DANILO">
                    <p className="raffle__name">DANILO</p>
                    <small className="raffle__familiar"></small>
                  </label>
                  <input
                    className="raffle__radio"
                    type="radio"
                    id="DANILO"
                    name="boyName">
                  </input>
                </li>
                <li className="">
                  <label htmlFor="DAVI">
                    <p className="raffle__name">DAVI</p>
                    <small className="raffle__familiar"></small>
                  </label>
                  <input
                    className="raffle__radio"
                    type="radio"
                    id="DAVI"
                    name="boyName">
                  </input>
                </li>
                <li className="raffle__selected">
                  <label htmlFor="ENZO">
                    <p className="raffle__name">ENZO</p>
                    <small className="raffle__familiar">Pedro Barioto</small>
                  </label>
                  <input
                    className="raffle__radio"
                    type="radio"
                    id="ENZO"
                    name="boyName">
                  </input>
                </li>
                <li className="">
                  <label htmlFor="FABIO">
                    <p className="raffle__name">FABIO</p>
                    <small className="raffle__familiar"></small>
                  </label>
                  <input
                    className="raffle__radio"
                    type="radio"
                    id="FABIO"
                    name="boyName">
                  </input>
                </li>
                <li className="">
                  <label htmlFor="FABRICIO">
                    <p className="raffle__name">FABRICIO</p>
                    <small className="raffle__familiar"></small>
                  </label>
                  <input
                    className="raffle__radio"
                    type="radio"
                    id="FABRICIO"
                    name="boyName">
                  </input>
                </li>
                <li className="">
                  <label htmlFor="GABRIEL">
                    <p className="raffle__name">GABRIEL</p>
                    <small className="raffle__familiar"></small>
                  </label>
                  <input
                    className="raffle__radio"
                    type="radio"
                    id="GABRIEL"
                    name="boyName">
                  </input>
                </li>
                <li className="">
                  <label htmlFor="GAEL">
                    <p className="raffle__name">GAEL</p>
                    <small className="raffle__familiar"></small>
                  </label>
                  <input
                    className="raffle__radio"
                    type="radio"
                    id="GAEL"
                    name="boyName">
                  </input>
                </li>
                <li className="">
                  <label htmlFor="GREGORIO">
                    <p className="raffle__name">GREGORIO</p>
                    <small className="raffle__familiar"></small>
                  </label>
                  <input
                    className="raffle__radio"
                    type="radio"
                    id="GREGORIO"
                    name="boyName">
                  </input>
                </li>
                <li className="">
                  <label htmlFor="HENRIQUE">
                    <p className="raffle__name">HENRIQUE</p>
                    <small className="raffle__familiar"></small>
                  </label>
                  <input
                    className="raffle__radio"
                    type="radio"
                    id="HENRIQUE"
                    name="boyName">
                  </input>
                </li>
                <li className="">
                  <label htmlFor="JOAO">
                    <p className="raffle__name">JOAO</p>
                    <small className="raffle__familiar"></small>
                  </label>
                  <input
                    className="raffle__radio"
                    type="radio"
                    id="JOAO"
                    name="boyName">
                  </input>
                </li>
                <li className="">
                  <label htmlFor="JOAQUIM">
                    <p className="raffle__name">JOAQUIM</p>
                    <small className="raffle__familiar"></small>
                  </label>
                  <input
                    className="raffle__radio"
                    type="radio"
                    id="JOAQUIM"
                    name="boyName">
                  </input>
                </li>
                <li className="">
                  <label htmlFor="JONAS">
                    <p className="raffle__name">JONAS</p>
                    <small className="raffle__familiar"></small>
                  </label>
                  <input
                    className="raffle__radio"
                    type="radio"
                    id="JONAS"
                    name="boyName">
                  </input>
                </li>
                <li className="">
                  <label htmlFor="KAIQUE">
                    <p className="raffle__name">KAIQUE</p>
                    <small className="raffle__familiar"></small>
                  </label>
                  <input
                    className="raffle__radio"
                    type="radio"
                    id="KAIQUE"
                    name="boyName">
                  </input>
                </li>
                <li className="">
                  <label htmlFor="LUCAS">
                    <p className="raffle__name">LUCAS</p>
                    <small className="raffle__familiar"></small>
                  </label>
                  <input
                    className="raffle__radio"
                    type="radio"
                    id="LUCAS"
                    name="boyName">
                  </input>
                </li>
                <li className="">
                  <label htmlFor="LUIS">
                    <p className="raffle__name">LUIS</p>
                    <small className="raffle__familiar"></small>
                  </label>
                  <input
                    className="raffle__radio"
                    type="radio"
                    id="LUIS"
                    name="boyName">
                  </input>
                </li>
                <li className="">
                  <label htmlFor="MARCOS">
                    <p className="raffle__name">MARCOS</p>
                    <small className="raffle__familiar"></small>
                  </label>
                  <input
                    className="raffle__radio"
                    type="radio"
                    id="MARCOS"
                    name="boyName">
                  </input>
                </li>
                <li className="">
                  <label htmlFor="MARTIM">
                    <p className="raffle__name">MARTIM</p>
                    <small className="raffle__familiar"></small>
                  </label>
                  <input
                    className="raffle__radio"
                    type="radio"
                    id="MARTIM"
                    name="boyName">
                  </input>
                </li>
                <li className="">
                  <label htmlFor="MATHEUS">
                    <p className="raffle__name">MATHEUS</p>
                    <small className="raffle__familiar"></small>
                  </label>
                  <input
                    className="raffle__radio"
                    type="radio"
                    id="MATHEUS"
                    name="boyName">
                  </input>
                </li>
                <li className="">
                  <label htmlFor="MAURICIO">
                    <p className="raffle__name">MAURICIO</p>
                    <small className="raffle__familiar"></small>
                  </label>
                  <input
                    className="raffle__radio"
                    type="radio"
                    id="MAURICIO"
                    name="boyName">
                  </input>
                </li>
                <li className="">
                  <label htmlFor="MIGUEL">
                    <p className="raffle__name">MIGUEL</p>
                    <small className="raffle__familiar"></small>
                  </label>
                  <input
                    className="raffle__radio"
                    type="radio"
                    id="MIGUEL"
                    name="boyName">
                  </input>
                </li>
                <li className="">
                  <label htmlFor="OTAVIO">
                    <p className="raffle__name">OTAVIO</p>
                    <small className="raffle__familiar"></small>
                  </label>
                  <input
                    className="raffle__radio"
                    type="radio"
                    id="OTAVIO"
                    name="boyName">
                  </input>
                </li>
                <li className="">
                  <label htmlFor="PEDRO">
                    <p className="raffle__name">PEDRO</p>
                    <small className="raffle__familiar"></small>
                  </label>
                  <input
                    className="raffle__radio"
                    type="radio"
                    id="PEDRO"
                    name="boyName">
                  </input>
                </li>
                <li className="">
                  <label htmlFor="RAFAEL">
                    <p className="raffle__name">RAFAEL</p>
                    <small className="raffle__familiar"></small>
                  </label>
                  <input
                    className="raffle__radio"
                    type="radio"
                    id="RAFAEL"
                    name="boyName">
                  </input>
                </li>
                <li className="">
                  <label htmlFor="RAUL">
                    <p className="raffle__name">RAUL</p>
                    <small className="raffle__familiar"></small>
                  </label>
                  <input
                    className="raffle__radio"
                    type="radio"
                    id="RAUL"
                    name="boyName">
                  </input>
                </li>
                <li className="">
                  <label htmlFor="RODRIGO">
                    <p className="raffle__name">RODRIGO</p>
                    <small className="raffle__familiar"></small>
                  </label>
                  <input
                    className="raffle__radio"
                    type="radio"
                    id="RODRIGO"
                    name="boyName">
                  </input>
                </li>
                <li className="">
                  <label htmlFor="ROMULO">
                    <p className="raffle__name">ROMULO</p>
                    <small className="raffle__familiar"></small>
                  </label>
                  <input
                    className="raffle__radio"
                    type="radio"
                    id="ROMULO"
                    name="boyName">
                  </input>
                </li>
                <li className="">
                  <label htmlFor="THEO">
                    <p className="raffle__name">THEO</p>
                    <small className="raffle__familiar"></small>
                  </label>
                  <input
                    className="raffle__radio"
                    type="radio"
                    id="THEO"
                    name="boyName">
                  </input>
                </li>
                <li className="">
                  <label htmlFor="THIAGO">
                    <p className="raffle__name">THIAGO</p>
                    <small className="raffle__familiar"></small>
                  </label>
                  <input
                    className="raffle__radio"
                    type="radio"
                    id="THIAGO"
                    name="boyName">
                  </input>
                </li>
                <li className="">
                  <label htmlFor="VICENTE">
                    <p className="raffle__name">VICENTE</p>
                    <small className="raffle__familiar"></small>
                  </label>
                  <input
                    className="raffle__radio"
                    type="radio"
                    id="VICENTE"
                    name="boyName">
                  </input>
                </li>
                <li className="">
                  <label htmlFor="VINICIUS">
                    <p className="raffle__name">VINICIUS</p>
                    <small className="raffle__familiar"></small>
                  </label>
                  <input
                    className="raffle__radio"
                    type="radio"
                    id="VINICIUS"
                    name="boyName">
                  </input>
                </li>
                <li className="">
                  <label htmlFor="YURI">
                    <p className="raffle__name">YURI</p>
                    <small className="raffle__familiar"></small>
                  </label>
                  <input
                    className="raffle__radio"
                    type="radio"
                    id="YURI"
                    name="boyName">
                  </input>
                </li>
              </ul>
            </div>
            <div className="raffle__wrapper-girl">
              <ul>
                <li className="">
                  <label htmlFor="ANA">
                    <p className="raffle__name">ANA</p>
                    <small className="raffle__familiar"></small>
                  </label>
                  <input
                    className="raffle__radio"
                    type="radio"
                    id="ANA"
                    name="boyName">
                  </input>
                </li>
                <li className="">
                  <label htmlFor="AURORA">
                    <p className="raffle__name">AURORA</p>
                    <small className="raffle__familiar"></small>
                  </label>
                  <input
                    className="raffle__radio"
                    type="radio"
                    id="AURORA"
                    name="boyName">
                  </input>
                </li>
                <li className="">
                  <label htmlFor="BEATRIZ">
                    <p className="raffle__name">BEATRIZ</p>
                    <small className="raffle__familiar"></small>
                  </label>
                  <input
                    className="raffle__radio"
                    type="radio"
                    id="BEATRIZ"
                    name="boyName">
                  </input>
                </li>
                <li className="">
                  <label htmlFor="BEATRIZ">
                    <p className="raffle__name">BEATRIZ</p>
                    <small className="raffle__familiar"></small>
                  </label>
                  <input
                    className="raffle__radio"
                    type="radio"
                    id="BEATRIZ"
                    name="boyName">
                  </input>
                </li>
                <li className="">
                  <label htmlFor="BIANCA">
                    <p className="raffle__name">BIANCA</p>
                    <small className="raffle__familiar"></small>
                  </label>
                  <input
                    className="raffle__radio"
                    type="radio"
                    id="BIANCA"
                    name="boyName">
                  </input>
                </li>
                <li className="">
                  <label htmlFor="BRUNA">
                    <p className="raffle__name">BRUNA</p>
                    <small className="raffle__familiar"></small>
                  </label>
                  <input
                    className="raffle__radio"
                    type="radio"
                    id="BRUNA"
                    name="boyName">
                  </input>
                </li>
                <li className="">
                  <label htmlFor="CAMILA">
                    <p className="raffle__name">CAMILA</p>
                    <small className="raffle__familiar"></small>
                  </label>
                  <input
                    className="raffle__radio"
                    type="radio"
                    id="CAMILA"
                    name="boyName">
                  </input>
                </li>
                <li className="">
                  <label htmlFor="CATARINA">
                    <p className="raffle__name">CATARINA</p>
                    <small className="raffle__familiar"></small>
                  </label>
                  <input
                    className="raffle__radio"
                    type="radio"
                    id="CATARINA"
                    name="boyName">
                  </input>
                </li><li className="">
                <label htmlFor="CECILIA">
                  <p className="raffle__name">CECILIA</p>
                  <small className="raffle__familiar"></small>
                </label>
                <input
                  className="raffle__radio"
                  type="radio"
                  id="CECILIA"
                  name="boyName">
                </input>
              </li>
                <li className="">
                  <label htmlFor="CLARA">
                    <p className="raffle__name">CLARA</p>
                    <small className="raffle__familiar"></small>
                  </label>
                  <input
                    className="raffle__radio"
                    type="radio"
                    id="CLARA"
                    name="boyName">
                  </input>
                </li>
                <li className="">
                  <label htmlFor="CLARISSA">
                    <p className="raffle__name">CLARISSA</p>
                    <small className="raffle__familiar"></small>
                  </label>
                  <input
                    className="raffle__radio"
                    type="radio"
                    id="CLARISSA"
                    name="boyName">
                  </input>
                </li>
                <li className="">
                  <label htmlFor="CRISTINA">
                    <p className="raffle__name">CRISTINA</p>
                    <small className="raffle__familiar"></small>
                  </label>
                  <input
                    className="raffle__radio"
                    type="radio"
                    id="CRISTINA"
                    name="boyName">
                  </input>
                </li>
                <li className="">
                  <label htmlFor="DIANA">
                    <p className="raffle__name">DIANA</p>
                    <small className="raffle__familiar"></small>
                  </label>
                  <input
                    className="raffle__radio"
                    type="radio"
                    id="DIANA"
                    name="boyName">
                  </input>
                </li>
                <li className="">
                  <label htmlFor="FABIOLA">
                    <p className="raffle__name">FABIOLA</p>
                    <small className="raffle__familiar"></small>
                  </label>
                  <input
                    className="raffle__radio"
                    type="radio"
                    id="FABIOLA"
                    name="boyName">
                  </input>
                </li>
                <li className="">
                  <label htmlFor="GISELE">
                    <p className="raffle__name">GISELE</p>
                    <small className="raffle__familiar"></small>
                  </label>
                  <input
                    className="raffle__radio"
                    type="radio"
                    id="GISELE"
                    name="boyName">
                  </input>
                </li>
                <li className="">
                  <label htmlFor="GRAZIELA">
                    <p className="raffle__name">GRAZIELA</p>
                    <small className="raffle__familiar"></small>
                  </label>
                  <input
                    className="raffle__radio"
                    type="radio"
                    id="GRAZIELA"
                    name="boyName">
                  </input>
                </li>
                <li className="">
                  <label htmlFor="HELENA">
                    <p className="raffle__name">HELENA</p>
                    <small className="raffle__familiar"></small>
                  </label>
                  <input
                    className="raffle__radio"
                    type="radio"
                    id="HELENA"
                    name="boyName">
                  </input>
                </li>
                <li className="">
                  <label htmlFor="ISABEL">
                    <p className="raffle__name">ISABEL</p>
                    <small className="raffle__familiar"></small>
                  </label>
                  <input
                    className="raffle__radio"
                    type="radio"
                    id="ISABEL"
                    name="boyName">
                  </input>
                </li>
                <li className="">
                  <label htmlFor="ISABELA">
                    <p className="raffle__name">ISABELA</p>
                    <small className="raffle__familiar"></small>
                  </label>
                  <input
                    className="raffle__radio"
                    type="radio"
                    id="ISABELA"
                    name="boyName">
                  </input>
                </li>
                <li className="">
                  <label htmlFor="JAQUELINE">
                    <p className="raffle__name">JAQUELINE</p>
                    <small className="raffle__familiar"></small>
                  </label>
                  <input
                    className="raffle__radio"
                    type="radio"
                    id="JAQUELINE"
                    name="boyName">
                  </input>
                </li>
                <li className="">
                  <label htmlFor="JOANA">
                    <p className="raffle__name">JOANA</p>
                    <small className="raffle__familiar"></small>
                  </label>
                  <input
                    className="raffle__radio"
                    type="radio"
                    id="JOANA"
                    name="boyName">
                  </input>
                </li>
                <li className="">
                  <label htmlFor="JULIA">
                    <p className="raffle__name">JULIA</p>
                    <small className="raffle__familiar"></small>
                  </label>
                  <input
                    className="raffle__radio"
                    type="radio"
                    id="JULIA"
                    name="boyName">
                  </input>
                </li>
                <li className="">
                  <label htmlFor="KARINA">
                    <p className="raffle__name">KARINA</p>
                    <small className="raffle__familiar"></small>
                  </label>
                  <input
                    className="raffle__radio"
                    type="radio"
                    id="KARINA"
                    name="boyName">
                  </input>
                </li>
                <li className="">
                  <label htmlFor="LAIS">
                    <p className="raffle__name">LAIS</p>
                    <small className="raffle__familiar"></small>
                  </label>
                  <input
                    className="raffle__radio"
                    type="radio"
                    id="LAIS"
                    name="boyName">
                  </input>
                </li>
                <li className="raffle__selected">
                  <label htmlFor="LAURA">
                    <p className="raffle__name">LAURA</p>
                    <small className="raffle__familiar">Pedro Barioto</small>
                  </label>
                  <input
                    className="raffle__radio"
                    type="radio"
                    id="LAURA"
                    name="boyName">
                  </input>
                </li>
                <li className="">
                  <label htmlFor="LAVINIA">
                    <p className="raffle__name">LAVINIA</p>
                    <small className="raffle__familiar"></small>
                  </label>
                  <input
                    className="raffle__radio"
                    type="radio"
                    id="LAVINIA"
                    name="boyName">
                  </input>
                </li>
                <li className="">
                  <label htmlFor="LETICIA">
                    <p className="raffle__name">LETICIA</p>
                    <small className="raffle__familiar"></small>
                  </label>
                  <input
                    className="raffle__radio"
                    type="radio"
                    id="LETICIA"
                    name="boyName">
                  </input>
                </li>
                <li className="">
                  <label htmlFor="LETICIA">
                    <p className="raffle__name">LETICIA</p>
                    <small className="raffle__familiar"></small>
                  </label>
                  <input
                    className="raffle__radio"
                    type="radio"
                    id="LETICIA"
                    name="boyName">
                  </input>
                </li><li className="">
                <label htmlFor="LIZ">
                  <p className="raffle__name">LIZ</p>
                  <small className="raffle__familiar"></small>
                </label>
                <input
                  className="raffle__radio"
                  type="radio"
                  id="LIZ"
                  name="boyName">
                </input>
              </li>
                <li className="">
                  <label htmlFor="LUIZA">
                    <p className="raffle__name">LUIZA</p>
                    <small className="raffle__familiar"></small>
                  </label>
                  <input
                    className="raffle__radio"
                    type="radio"
                    id="LUIZA"
                    name="boyName">
                  </input>
                </li>
                <li className="">
                  <label htmlFor="MAITE">
                    <p className="raffle__name">MAITE</p>
                    <small className="raffle__familiar"></small>
                  </label>
                  <input
                    className="raffle__radio"
                    type="radio"
                    id="MAITE"
                    name="boyName">
                  </input>
                </li>
                <li className="">
                  <label htmlFor="MAITE">
                    <p className="raffle__name">MAITE</p>
                    <small className="raffle__familiar"></small>
                  </label>
                  <input
                    className="raffle__radio"
                    type="radio"
                    id="MAITE"
                    name="boyName">
                  </input>
                </li>
                <li className="">
                  <label htmlFor="MARCELA">
                    <p className="raffle__name">MARCELA</p>
                    <small className="raffle__familiar"></small>
                  </label>
                  <input
                    className="raffle__radio"
                    type="radio"
                    id="MARCELA"
                    name="boyName">
                  </input>
                </li>
                <li className="">
                  <label htmlFor="MARIA">
                    <p className="raffle__name">MARIA</p>
                    <small className="raffle__familiar"></small>
                  </label>
                  <input
                    className="raffle__radio"
                    type="radio"
                    id="MARIA"
                    name="boyName">
                  </input>
                </li>
                <li className="">
                  <label htmlFor="MELISSA">
                    <p className="raffle__name">MELISSA</p>
                    <small className="raffle__familiar"></small>
                  </label>
                  <input
                    className="raffle__radio"
                    type="radio"
                    id="MELISSA"
                    name="boyName">
                  </input>
                </li>
                <li className="">
                  <label htmlFor="MILENA">
                    <p className="raffle__name">MILENA</p>
                    <small className="raffle__familiar"></small>
                  </label>
                  <input
                    className="raffle__radio"
                    type="radio"
                    id="MILENA"
                    name="boyName">
                  </input>
                </li>
                <li className="">
                  <label htmlFor="MONICA">
                    <p className="raffle__name">MONICA</p>
                    <small className="raffle__familiar"></small>
                  </label>
                  <input
                    className="raffle__radio"
                    type="radio"
                    id="MONICA"
                    name="boyName">
                  </input>
                </li>
                <li className="">
                  <label htmlFor="NATALIA">
                    <p className="raffle__name">NATALIA</p>
                    <small className="raffle__familiar"></small>
                  </label>
                  <input
                    className="raffle__radio"
                    type="radio"
                    id="NATALIA"
                    name="boyName">
                  </input>
                </li>
                <li className="">
                  <label htmlFor="RAQUEL">
                    <p className="raffle__name">RAQUEL</p>
                    <small className="raffle__familiar"></small>
                  </label>
                  <input
                    className="raffle__radio"
                    type="radio"
                    id="RAQUEL"
                    name="boyName">
                  </input>
                </li>
                <li className="">
                  <label htmlFor="SIMONE">
                    <p className="raffle__name">SIMONE</p>
                    <small className="raffle__familiar"></small>
                  </label>
                  <input
                    className="raffle__radio"
                    type="radio"
                    id="SIMONE"
                    name="boyName">
                  </input>
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
