import React from "react";

// import map from "./assets/map.png";
import fire from "./assets/fire.svg";

const styles = {
  map: {
    position: "absolute",
    width: "100vw",
    height: "100vh",
  },
  img: {
    width: "100%",
    height: "100%",
  },
  panel: {
    height: "0px",
    transition: '.5s',

    position: "absolute",
    left: "calc(50% - 40px)",
    width: "75px",
    background: "#FF565E",
    borderRadius: "50px 50px 0px 0px",
    bottom: 0,
  },
  btn: {
    margin: "10% 0 0 10%",
    outline: "none",
    width: "60px",
    height: "60px",
    borderRadius: "100%",
    background: "#20212A",
    border: "none",
  },
};

function App() {
  return (
    <div className="container">
      <div id="map" className="map" style={styles.map}>

      </div>
      <div className="panel" style={styles.panel}>
        <button style={styles.btn}>
          <img src={fire} alt="alert button"></img>
        </button>
      </div>
    </div>
  );
}

export default App;
