import React, { useState } from "react";
import styles from "./lakeStats.module.css";
import Button from "react-bootstrap/Button";
import { Redirect } from "react-router-dom";
import TodaysWeather from "./weather/TodaysWeather";

function LakeStats(props) {
  const [toVariable, setToVariable] = useState(false);

  const goToVar = (type, index) => {
    props.setCurrentVariable(type, index);
    setToVariable(true);
  };

  return toVariable ? (
    <Redirect to="/fishv3/variable"></Redirect>
  ) : (
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
            <div className={styles.infoBody}>
              Catches: {props.lakes[props.lakeIndex].lakes[0].catches}{" "}
            </div>
            <div className={styles.infoBody}>
              Casts: {props.lakes[props.lakeIndex].lakes[0].castIndexes.length}
            </div>
            <div className={styles.infoBody}>
              Time Fished:{" "}
              {props.mSToReadable(
                props.lakes[props.lakeIndex].lakes[0].duration
              )}{" "}
            </div>
            <div className={styles.infoBody}>Biggest Catch: </div>
            <div className={styles.timeData}>
              <TodaysWeather weather={props.lakes[1].weather}></TodaysWeather>
            </div>
          </div>
          {props.isFullScreen ? null : (
            <div className={styles.buttonContainer}>
              {" "}
              <Button
                className={styles.button}
                variant="info"
                onClick={() => {
                  goToVar("lakes", props.lakeIndex);
                }}
              >
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
