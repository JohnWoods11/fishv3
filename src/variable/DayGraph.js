import React from "react";
import styles from "./dayGraph.module.css";

function DayGraph(props) {
  return (
    <div className={styles.container}>
      {props.days.map((day, index) => (
        <div className={styles.day}>
          <div
            style={{
              height: `${
                day.durationFished / 60 / day.catches < 25
                  ? `${(day.durationFished / 60 / day.catches) * 4}%`
                  : "100%"
              }`,
              width: `${90 / 366}vw`,
              backgroundColor: "gray",
            }}
          ></div>
          <div
            style={{
              height: `${
                day.durationFished / 60 / day.catches < 25
                  ? `${(25 - day.durationFished / 60 / day.catches) * 4}%`
                  : "0%"
              }`,
              width: `${90 / 366}vw`,
              backgroundColor: "green",
            }}
          ></div>
        </div>
      ))}
    </div>
  );
}
export default DayGraph;
