import React from "react";
import getIcon from "./IconManager";
import styles from "./biHourlyWeather.module.css";

function BiHourlyWeather(props) {
  const getHour = (ms) => {
    let date = new Date();
    date.setTime(ms * 1000);
    return date.getUTCHours();
  };

  let bihourly = [];

  if (props.weather.data) {
    for (let i = 0; i < 16; i += 2) {
      bihourly.push(props.weather.data.hourly[i]);
    }
  }

  return props.weather.data ? (
    <div className={styles.container}>
      {bihourly.map((hour, index) => (
        <div key={index} className={styles.hour}>
          <div style={{ fontWeight: "bold", fontSize: "smaller" }}>
            {getHour(hour.dt)}:00
          </div>
          {getHour(hour.dt) < 20 && getHour(hour.dt) > 6 ? (
            <div style={{ backgroundColor: "orange" }}>
              {Math.round(hour.temp)}&deg;
            </div>
          ) : (
            <div style={{ backgroundColor: "black", color: "white" }}>
              {Math.round(hour.temp)}&deg;
            </div>
          )}
          <div>
            <img src={getIcon(hour.weather[0].icon)}></img>
          </div>
          <div
            style={{
              fontSize: "large",
              fontWeight: "bold",
              transform: `rotate(${hour.wind_deg + 180}deg)`,
            }}
          >
            &uarr;
          </div>
          <div>{Math.round(hour.wind_speed * 2.23)}</div>
        </div>
      ))}
    </div>
  ) : (
    <div className={styles.container}>No weather available</div>
  );
}

export default BiHourlyWeather;
