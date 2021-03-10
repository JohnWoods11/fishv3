import React from "react";
import { Link, Redirect } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import styles from "./session.module.css";

function Session(props) {
  /*
  const endSession = () => {
    props.endSession();
    return <Redirect to="/fishv3/" />;
  };

  const cast = () => {
    props.cast();
  };

  const endCast = () => {
    props.recordReelIn();
    props.recordCatchFail();
    props.endCast();
  };

  const addBite = () => {
    if (props.currentSession.casting) {
      props.addBite();
    }
  };

  const changeBait = () => {
    props.changeBait(baitIndex);
  };

  const changeStyle = () => {
    props.changeStyle(styleIndex);
  };

  const recordCatch = () => {
    props.recordReelIn();
    return <Redirect to="/fishv3/catch" />;
  };
*/
  console.log(props.currentSession);
  return props.currentSession ? (
    <div className={styles.container}>
      <div className={styles.display}>
        <div className={styles.lakeName}>
          {props.lakes[props.currentSession.lakeIndex].name}
        </div>
        <div className={styles.castInfo}>
          <div className={styles.displayItem}>
            <p>Session time</p> <p>-time-</p>
          </div>
          <div className={styles.displayItem}>
            <p>Current cast time</p> <p>-time-</p>
          </div>
          <div className={styles.displayItem}>
            <p>Catches</p> <p>{props.currentSession.catches}</p>
          </div>
          <div className={styles.displayItem}>
            <p>Bites</p> <p>{props.currentSession.bites}</p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Redirect to="/fishv3/" />
  );
}

export default Session;
