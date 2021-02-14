import React from "react";
import Button from "react-bootstrap/Button";
import styles from "./coordInput.module.css";

function CoordInput(props) {
  return (
    <div className={styles.container}>
      <div className={styles.hbox}>
        <a>
          {props.coords
            ? `${props.coords.latitude.toFixed(
                2
              )}N ${props.coords.longitude.toFixed(2)}E`
            : "--"}
        </a>
        <Button onClick={() => props.setLocation()}>&#9678;</Button>
        <Button>&#9998;</Button>
      </div>
      <div></div>
    </div>
  );
}

export default CoordInput;
