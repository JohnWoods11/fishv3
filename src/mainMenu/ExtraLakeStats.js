import React from "react";
import styles from "./extraLakeStats.module.css";
import Button from "react-bootstrap/Button";

function ExtraLakeStats(props) {
  return (
    <div className={styles.container}>
      <div>More stats</div>
      {props.lakeIndex !== null ? (
        <div className={styles.buttonContainer}>
          <Button className={styles.button} variant="info">
            Lake
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
        </div>
      ) : null}
    </div>
  );
}

export default ExtraLakeStats;
