import React from "react";
import styles from "./timeGraph.module.css";

function TimeGraph(props) {
  return (
    <div className={styles.container}>
      {props.times.map((time, index) => (
        <div className={styles.hour} key={index}>
          <div
            style={{
              height: `${
                time.durationFished / 60 / time.catches < 25
                  ? `${(time.durationFished / 60 / time.catches) * 4}%`
                  : "100%"
              }`,
              width: `${90 / 24}vw`,
              backgroundColor: "gray",
            }}
          ></div>
          <div
            style={{
              height: `${
                time.durationFished / 60 / time.catches < 25
                  ? `${(25 - time.durationFished / 60 / time.catches) * 4}%`
                  : "0%"
              }`,
              width: `${90 / 24}vw`,
              backgroundColor: "green",
            }}
          ></div>
        </div>
      ))}
    </div>
  );
}

export default TimeGraph;
