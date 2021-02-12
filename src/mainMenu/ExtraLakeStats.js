import React, { useState } from "react";
import styles from "./extraLakeStats.module.css";
import Button from "react-bootstrap/Button";
import DailyWeather from "./weather/DailyWeather";
import BiHourlyWeather from "./weather/BiHourlyWeather";
import { Redirect } from "react-router-dom";

function ExtraLakeStats(props) {
  const [toVariable, setToVariable] = useState(false);

  const goToVar = (variable) => {
    props.setCurrentVariable(variable);
    setToVariable(true);
  };

  return toVariable ? (
    <Redirect to="/fishv3/variable"></Redirect>
  ) : (
    <div className={styles.container}>
      {props.lakeIndex !== null ? (
        <BiHourlyWeather weather={props.lakes[props.lakeIndex].weather} />
      ) : (
        <div>Select a lake to see the weather</div>
      )}

      {props.lakeIndex !== null ? (
        <div className={styles.buttonContainer}>
          <Button
            className={styles.button}
            variant="info"
            onClick={() => {
              goToVar(props.lakes[props.lakeIndex]);
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
      ) : null}
    </div>
  );
}

export default ExtraLakeStats;
