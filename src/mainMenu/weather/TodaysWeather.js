import React from "react";
import styles from "./todaysWeather.module.css";

function TodaysWeather(props) {
  console.log(props.weather);

  let today = props.weather.data.daily[0];
  console.log(today);

  return (
    <div className={styles.container}>
      <div className={styles.vbox}>
        <div>{Math.round(today.temp.day)}&deg;</div>{" "}
        <div>{Math.round(today.temp.night)}&deg;</div>
      </div>
      <div>{today.weather[0].main}</div>
    </div>
  );
}

export default TodaysWeather;
