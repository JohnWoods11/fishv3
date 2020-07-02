import React from "react";
import styles from "./sessionDash.module.css";
import Button from "react-bootstrap/Button";

function SessionDash(props) {
  return props.currentSession ? (
    <div className={styles.container}>{props.lakes[props.lakeIndex].name}</div>
  ) : (
    <div className={styles.container}>
      <div className={styles.lakeName}>{props.lakes[props.lakeIndex].name}</div>
      <div>best bait style etc here</div>
      <div>store coordinates of lake</div>
      <div>look up temps</div>
      <div className={styles.buttonContainer}>
        <Button
          variant="secondary"
          className={styles.button}
          onClick={props.resetIsFishing}
        >
          back
        </Button>
        <Button variant="success" className={styles.button}>
          Start session
        </Button>
      </div>
    </div>
  );
}

export default SessionDash;
