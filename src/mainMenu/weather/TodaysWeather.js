import React from "react";
import styles from "./todaysWeather.module.css";
import getIcon from "./IconManager";

function TodaysWeather(props) {
  console.log(props)
  let today;

  if (props.weather) {
    today = props.weather.data.daily[0];
  }

  return props.weather ? (
    <div className={styles.day}>
      <div style={{ backgroundColor: "orange" }}>
        {Math.round(today.temp.day)}&deg;
      </div>
      <div style={{ backgroundColor: "black", color: "white" }}>
        {Math.round(today.temp.night)}&deg;
      </div>
      <div>
        <img
          src={getIcon(today.weather[0].icon)}
          alt={`${today.weather[0].main} icon`}
        ></img>
      </div>
      <div
        style={{
          fontSize: "large",
          fontWeight: "bold",
          transform: `rotate(${today.wind_deg + 180}deg)`,
        }}
      >
        &uarr;
      </div>
      <div>{Math.round(today.wind_speed * 2.23)} mph</div>
    </div>
  ) : (
    <div className={styles.container}>No weather available</div>
  );
}

export default TodaysWeather;
