import React from "react";
import styles from "./dailyWeather.module.css";

function DailyWeather(props) {
  console.log(props.weather);
  return props.weather ? (
    <div className={styles.container}>
      {props.weather.map((day, index) => (
        <div key={index} className={styles.day}>
          {Math.round(day.temp.day)}
        </div>
      ))}
    </div>
  ) : (
    <div className={styles.container}>No weather available</div>
  );
}

export default DailyWeather;
