import React from "react";
import styles from "./stats.module.css";

function Stats(props) {
  let species = [0, 0, 0, 0];
  let bait = [0, 0, 0, 0];
  let style = [0, 0, 0, 0];
  //props.castHistory.map((cast, index) => {
  for (const cast in props.castHistory) {
    species[cast.species] += 1;
    bait[cast.bait] += 1;
    style[cast.style] += 1;
  }
  return (
    <div className={styles.container}>
      <div className={styles.header}>{"Stats & Tools"}</div>
      {species.map((species, index) => (
        <div>
          {props.species[index].name}: {species}
        </div>
      ))}
      {bait.map((bait, index) => (
        <div>
          {props.baits[index].name}: {bait}
        </div>
      ))}
      {style.map((style, index) => (
        <div>
          {props.styles[index].name}: {style}
        </div>
      ))}
    </div>
  );
}

export default Stats;
