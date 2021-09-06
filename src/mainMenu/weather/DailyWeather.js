import React from "react";
import styles from "./dailyWeather.module.css";
import getIcon from "./IconManager";

function DailyWeather(props) {
  const getDate = (ms) => {
    //convert seconds into milliseconds
    let date = new Date();
    date.setTime(ms * 1000);
    return `${date.getUTCDate()}/${date.getUTCMonth() + 1}`;
  };

  return props.weather ? (
    <div className={styles.container}>
      {props.weather.data.daily.map((day, index) => (
        <div key={index} className={styles.day}>
          <div style={{ fontWeight: "bold" }}>{getDate(day.dt)}</div>
          <div style={{ backgroundColor: "orange" }}>
            {Math.round(day.temp.day)}&deg;
          </div>
          <div style={{ backgroundColor: "black", color: "white" }}>
            {Math.round(day.temp.night)}&deg;
          </div>
          <div>
            <img
              src={getIcon(day.weather[0].icon)}
              alt={`${day.weather[0].main} icon`}
            ></img>
          </div>
          <div
            style={{
              fontSize: "large",
              fontWeight: "bold",
              transform: `rotate(${day.wind_deg + 180}deg)`,
            }}
          >
            &uarr;
          </div>
          <div>{Math.round(day.wind_speed * 2.23)}</div>
        </div>
      ))}
    </div>
  ) : (
    <div className={styles.container}>No weather available</div>
  );
}

export default DailyWeather;
