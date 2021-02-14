import React, { useState } from "react";
import styles from "./extraLakeStats.module.css";
import Button from "react-bootstrap/Button";
import DailyWeather from "./weather/DailyWeather";
import BiHourlyWeather from "./weather/BiHourlyWeather";
import { Redirect } from "react-router-dom";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

function ExtraLakeStats(props) {
  const [toVariable, setToVariable] = useState(false);

  const goToVar = (type, index) => {
    props.setCurrentVariable(type, index);
    setToVariable(true);
  };

  return toVariable ? (
    <Redirect to="/fishv3/variable"></Redirect>
  ) : (
    <div className={styles.container}>
      {props.lakeIndex !== null ? (
        <div style={{ width: "100%" }}>
          <Tabs defaultActiveKey="daily">
            <Tab eventKey="daily" title="Daily">
              <DailyWeather weather={props.lakes[props.lakeIndex].weather} />
            </Tab>
            <Tab eventKey="Hourly" title="Hourly">
              <BiHourlyWeather weather={props.lakes[props.lakeIndex].weather} />
            </Tab>
          </Tabs>{" "}
        </div>
      ) : (
        <div>Select a lake to see the weather</div>
      )}

      {props.lakeIndex !== null ? (
        <div className={styles.buttonContainer}>
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
      ) : null}
    </div>
  );
}

export default ExtraLakeStats;
