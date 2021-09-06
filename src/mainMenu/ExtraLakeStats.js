import React from "react";
import styles from "./extraLakeStats.module.css";
import DailyWeather from "./weather/DailyWeather";
import BiHourlyWeather from "./weather/BiHourlyWeather";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

function ExtraLakeStats(props) {

  return (
    <div className={styles.container}>
      {props.lakeIndex !== null ? (
        <div style={{ width: "100%" }}>
          <Tabs transition={false} defaultActiveKey="daily">
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
    </div>
  );
}

export default ExtraLakeStats;
