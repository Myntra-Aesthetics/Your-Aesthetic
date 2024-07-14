import React from "react";
import "./App.css";
import logo from "./Assets/Myntra.png";
import vintage from "./Assets/Images/Vintage.jpg";
import oldMoney from "./Assets/Images/Old Money.jpg";
import fairyCore from "./Assets/Images/FairyCore.jpg";
import y2k from "./Assets/Images/Y2K.jpg";
import desi from "./Assets/Images/Desi.jpg";
import goth from "./Assets/Images/Goth.jpg";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hey Sweetheart!</h1>
        <p>How are you vibing today?</p>
      </header>
      <div className="styles-grid">
        <a
          href="https://www.myntra.com/corset%20bandani%20print"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="style-option">
            <img src={vintage} alt="Vintage" />
            <span>Vintage</span>
          </div>
        </a>
        <a
          href="https://www.myntra.com/cardigans"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="style-option">
            <img src={oldMoney} alt="Old Money" />
            <span>Old Money</span>
          </div>
        </a>
        <a
          href="https://www.myntra.com/floraldresss"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="style-option">
            <img src={fairyCore} alt="FairyCore" />
            <span>FairyCore</span>
          </div>
        </a>
        <a href="https://www.myntra.com/y2k" target="_blank" rel="noopener noreferrer" className="no-underline">
          <div className="style-option">
            <img src={y2k} alt="Y2K" />
            <span>Y2K</span>
          </div>
        </a>
        <a href="https://www.myntra.com/indianwearwomen" target="_blank" rel="noopener noreferrer" className="no-underline">
        <div className="style-option">
          <img src={desi} alt="Desi" />
          <span>Desi</span>
        </div>
        </a>
        <a href="https://www.myntra.com/blackpartydress" target="_blank" rel="noopener noreferrer" className="no-underline">
        <div className="style-option">
          <img src={goth} alt="Goth" />
          <span>Goth</span>
        </div>
        </a>
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
