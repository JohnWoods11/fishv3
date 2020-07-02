import React from "react";
import styles from "./lakeStats.module.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function LakeStats(props) {
  return (
    <div className={styles.container}>
      {props.lakeIndex === null ? (
        <div>Select a lake to fish</div>
      ) : (
        <div>
          {" "}
          {props.lakes[props.lakeIndex].name}
          <Button
            variant="success"
            onClick={() => {
              props.fishLake();
            }}
          >
            Fish
          </Button>
        </div>
      )}
    </div>
  );
}

export default LakeStats;
