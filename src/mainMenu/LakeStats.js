import React, { useState } from "react";
import { Link } from "react-router-dom";
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
            <div className={styles.hbox}>
              <div className={styles.stats}>
                <div className={styles.infoBody}>
                  <span role="img" aria-label="catches">
                    &#128031;
                  </span>{" "}
                  {props.lakes[props.lakeIndex].lakes[0].catches}{" "}
                </div>
                <div className={styles.infoBody}>
                  <span role="img" aria-label="casts">
                    &#127907;
                  </span>{" "}
                  {props.lakes[props.lakeIndex].lakes[0].castIndexes.length}
                </div>
                <div className={styles.infoBody}>
                  <span role="img" aria-label="time cast">
                    &#9202;
                  </span>
                  {props.mSToReadable(
                    props.lakes[props.lakeIndex].lakes[0].duration
                  )}
                </div>
                <div className={styles.infoBody}>
                  <span role="img" aria-label="heaviest catch">
                    &#9878;
                  </span>{" "}
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
            {props.currentSession ? (
              <Link to="/fishv3/session">
                <Button className={styles.button} variant="success">
                  Session
                </Button>
              </Link>
            ) : (
              <Button
                className={styles.button}
                variant="success"
                onClick={() => {
                  props.fishLake();
                }}
              >
                Fish
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default LakeStats;
