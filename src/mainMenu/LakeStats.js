import React, { useState } from "react";
import styles from "./lakeStats.module.css";
import Button from "react-bootstrap/Button";
import { Redirect } from "react-router-dom";
import TodaysWeather from "./weather/TodaysWeather";
import CoordInput from "./CoordInput";

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
            <div className={styles.hbox}>
              <div className={styles.stats}>
                <div className={styles.infoBody}>
                  &#128031; {props.lakes[props.lakeIndex].lakes[0].catches}{" "}
                </div>
                <div className={styles.infoBody}>
                  &#127907;{" "}
                  {props.lakes[props.lakeIndex].lakes[0].castIndexes.length}
                </div>
                <div className={styles.infoBody}>
                  &#9202;
                  {props.mSToReadable(
                    props.lakes[props.lakeIndex].lakes[0].duration
                  )}
                </div>
                <div className={styles.infoBody}>
                  &#9878;{" "}
                  {props.lakes[props.lakeIndex].lakes[0].heaviestCatch.weight}{" "}
                </div>
              </div>
              <div className={styles.timeData}>
                <TodaysWeather
                  weather={props.lakes[props.lakeIndex].weather}
                ></TodaysWeather>
              </div>
            </div>
          </div>
          {props.isFullScreen ? (
            <CoordInput
              coords={props.lakes[props.lakeIndex].coordinates}
              setLocation={() => props.setLocation(props.lakeIndex)}
            ></CoordInput>
          ) : (
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
