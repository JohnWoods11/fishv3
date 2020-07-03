import React from "react";
import styles from "./lakeStats.module.css";
import Button from "react-bootstrap/Button";

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
            <div className={styles.infoBody}>Catches: </div>
            <div className={styles.infoBody}>
              Casts: {props.lakes[props.lakeIndex].lakes[0].castIndexes.length}
            </div>
            <div className={styles.infoBody}>Time Fished: </div>
            <div className={styles.infoBody}>Biggest Catch: </div>
            <div className={styles.timeData}>to do</div>
          </div>
          {props.isFullScreen ? null : (
            <div className={styles.buttonContainer}>
              {" "}
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
          )}
        </div>
      )}
    </div>
  );
}

export default LakeStats;
