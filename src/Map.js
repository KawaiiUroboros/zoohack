import React from "react";

import styles from "./map.css";
import fire from "./assets/fire.svg";
// import animals from "./assets/pug.png";

function WarnMap() {
  function appearWarnPage(e) {
    document.querySelector(".warn-page").style.height = "100vh";
  }
  function disappearWarnPage(e) {
    document.querySelector(".warn-page").style.height = "0vh";
  }
  return (
    <div className="container">
      <div id="map" className="map"></div>
      <div className="panel">
        <button className="btn" onClick={appearWarnPage}>
          <img src={fire} alt="alert button"></img>
        </button>
      </div>
      <div className="warn-page">
        <button onClick={disappearWarnPage} className="btn-back">
          К карте
        </button>
        <form>
          <label className="file-label">
            <span className="file-span">Выберите файл</span>
            <input type="file" className="file"></input>
          </label>
          <label className="text-label">
            <p className="p-address">Адрес:</p>
            <input type="text" className="text-input"></input>
          </label>
          <button className="btn-send" type="submit">
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
}

export default WarnMap;
