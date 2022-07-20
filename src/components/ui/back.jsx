/** @format */

import React from "react";
import Particles from "react-particles-js";
import ParticlesConfig from "./particles_fonfig";
import styles from "./background.module.css"

const Background = () => {
  return (
    <div className={styles.background}>
      <Particles params={ParticlesConfig} />
      {/* <p>https://codepen.io/Saramazal/pen/LYyywNb</p>
      <p>https://codepen.io/isladjan/pen/bGpjZwN</p> */}
    </div>
  );
};

export default Background;
