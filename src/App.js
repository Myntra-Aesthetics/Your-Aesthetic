import React from "react";
import "./App.css";
import logo from "./Assets/Myntra.png";
import vintage from "./Assets/Images/Vintage.jpg";
import oldMoney from "./Assets/Images/Old Money.jpg";
import fairyCore from "./Assets/Images/FairyCore.jpg";
import y2k from "./Assets/Images/Y2K.jpg";
import desi from "./Assets/Images/Desi.jpg";
import goth from "./Assets/Images/Goth.jpg";
import { Link, Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hey Sweetheart!</h1>
        <p>How are you vibing today?</p>
      </header>
      <div className="styles-grid">
        <div className="style-option">
          <img src={vintage} alt="Vintage" />
          <span>Vintage</span>
        </div>
        <div className="style-option">
          <img src={oldMoney} alt="Old Money" />
          <span>Old Money</span>
        </div>
        <div className="style-option">
          <img src={fairyCore} alt="FairyCore" />
          <span>FairyCore</span>
        </div>
        <div className="style-option">
          <img src={y2k} alt="Y2K" />
          <span>Y2K</span>
        </div>
        <div className="style-option">
          <img src={desi} alt="Desi" />
          <span>Desi</span>
        </div>
        <div className="style-option">
          <img src={goth} alt="Goth" />
          <span>Goth</span>
        </div>
      </div>
      <button className="view-more">View More</button>
      <footer>
        <p>Not sure what your style is?</p>
          <Link to="/quiz" basename="/">
            <a href="#quiz">Let’s find out</a>
          </Link>
      </footer>
    </div>
  );
}

export default App;
