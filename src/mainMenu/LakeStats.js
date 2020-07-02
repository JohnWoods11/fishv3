import React from "react";
import styles from "./lakeStats.module.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function LakeStats(props) {
  return (
    <div className={styles.container}>
      {props.lakeIndex === null ? (
        <div>Select a lake to fish</div>
      ) : (
        <div className={styles.container}>
          {" "}
          <div className={styles.lakeInfoContainer}>
            <div className={styles.infoHeader}>
              {props.lakes[props.lakeIndex].name}
            </div>
            <div className={styles.infoBody}>Info about this lake</div>
          </div>
          <div className={styles.buttonContainer}>
            {" "}
            <Button className={styles.button} variant="info">
              Go
            </Button>
            <Button
              className={styles.button}
              variant="success"
              onClick={() => {
                props.fishLake();
              }}
            >
              Fish
            </Button>
          </div>{" "}
        </div>
      )}
    </div>
  );
}

export default LakeStats;
