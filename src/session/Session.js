import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import styles from "./session.module.css";

function Session(props) {
  const [currentRodIndex, setCurrentRodIndex] = useState(0);

  const getRod = (rodIndex) => {
    try {
      if (rodIndex + 1) {
        let rod = {
          sessionTime: 0,
          castingTime: 0,
          casts: props.currentSession.rods[rodIndex].casts,
          catches: props.currentSession.rods[rodIndex].catches,
          bites: props.currentSession.rods[rodIndex].bites,
          casting: props.currentSession.rods[rodIndex].currentCast.casting,
          bait: props.currentSession.rods[rodIndex].currentCast.bait,
          style: props.currentSession.rods[rodIndex].currentCast.style,
        };
        let now = new Date();
        let nowMilli = now.getTime();
        rod.sessionTime = nowMilli - props.currentSession.startTime;
        rod.castingTime =
          nowMilli - props.currentSession.rods[rodIndex].castTime;
        return rod;
      } else {
        let allRods = {
          sessionTime: 0,
          castingTime: 0,
          casts: 0,
          catches: 0,
          bites: 0,
          bait: null,
          style: null,
          casting: null,
        };
        let now = new Date();
        let nowMilli = now.getTime();
        allRods.sessionTime = nowMilli - props.currentSession.startTime;
        for (const rod in props.currentSession.rods) {
          allRods.castingTime +=
            nowMilli - props.currentSession.rods[rod].castTime;
          allRods.casts += props.currentSession.rods[rod].casts;
          allRods.catches += props.currentSession.rods[rod].catches;
          allRods.bites += props.currentSession.rods[rod].bites;
        }
        console.log(allRods);
        return allRods;
      }
    } catch {
      console.log(`Error: Couldn't retrieve rod ${rodIndex}.`);
    }
  };

  const rodsInWater = () => {
    let rodsInWater = [];
    for (const rod in props.currentSession.rods) {
      if (props.currentSession.rods[rod].currentCast.casting) {
        rodsInWater.push(rod);
      }
    }
    return rodsInWater;
  };

  const endSession = () => {
    props.endSession();
    return <Redirect to="/fishv3/" />;
  };
  /*
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
  let currentRod = getRod(currentRodIndex);
  return props.currentSession ? (
    <div className={styles.container}>
      <div className={styles.display}>
        <div className={styles.lakeName}>
          {props.lakes[props.currentSession.lakeIndex].name}
        </div>
        <div className={styles.castInfo}>
          <div className={styles.displayItem}>
            <p>Session time</p> <p>{props.mSToHours(currentRod.sessionTime)}</p>
          </div>
          <div className={styles.displayItem}>
            <p>Current cast time</p>{" "}
            <p>{props.mSToHours(currentRod.castingTime)}</p>
          </div>
          <div className={styles.displayItem}>
            <p>Casts</p>
            <p>{currentRod.casts}</p>
          </div>
          <div className={styles.displayItem}>
            <p>Catches</p> <p>{currentRod.catches}</p>
          </div>
          <div className={styles.displayItem}>
            <p>Bites</p> <p>{currentRod.bites}</p>
          </div>
          <div className={styles.rods}>
            <ButtonGroup size="sm">
              <Button
                variant="secondary"
                onClick={() => {
                  setCurrentRodIndex(-1);
                }}
              >
                All
              </Button>
              {props.currentSession.rods.map((rod, index) => (
                <Button
                  key={index}
                  variant={rod.currentCast.casting ? "success" : "secondary"}
                  onClick={() => {
                    setCurrentRodIndex(index);
                  }}
                >{`Rod ${index + 1}`}</Button>
              ))}
              <Button variant="primary">+</Button>
            </ButtonGroup>
          </div>
        </div>
      </div>
      <div className={styles.controls}>
        <div className={styles.rodOptions}>
          <DropdownButton
            as={ButtonGroup}
            style={{ width: "39vw" }}
            size="sm"
            variant="info"
            title={
              currentRod.bait !== null
                ? props.baits[currentRod.bait].name
                : "NO BAIT"
            }
            disabled={currentRodIndex + 1 ? false : true}
          >
            {props.baits.map((bait, index) =>
              bait !== null ? (
                <Dropdown.Item key={index} eventKey={index}>
                  {bait.name}
                </Dropdown.Item>
              ) : null
            )}
          </DropdownButton>
          <DropdownButton
            as={ButtonGroup}
            style={{ width: "39vw" }}
            size="sm"
            variant="info"
            title={
              currentRod.style !== null
                ? props.styles[currentRod.style].name
                : "NO STYLE"
            }
            disabled={currentRodIndex + 1 ? false : true}
          >
            {props.styles.map((style, index) =>
              style !== null ? (
                <Dropdown.Item key={index} eventKey={index}>
                  {style.name}
                </Dropdown.Item>
              ) : null
            )}
          </DropdownButton>
        </div>
        <div className={styles.fishingControls}>
          {currentRod.casting ? (
            <Button className={styles.fullButton} variant="success">
              FISH LANDED
            </Button>
          ) : (
            <Button
              className={styles.fullButton}
              disabled={currentRod.casting === null ? true : false}
              variant="secondary"
            >
              CAST
            </Button>
          )}
          <div className={styles.hBox}>
            <Button
              className={styles.halfButton}
              disabled={currentRod.casting === null ? true : false}
              size="sm"
              variant="primary"
            >
              BITE / RUN
            </Button>
            {currentRod.casting ? (
              <Button
                className={styles.halfButton}
                size="sm"
                variant="secondary"
              >
                END CAST
              </Button>
            ) : (
              <Button
                className={styles.halfButton}
                disabled={rodsInWater().length ? true : false}
                size="sm"
                variant="danger"
                onClick={() => {
                  endSession();
                }}
              >
                END SESSION
              </Button>
            )}
          </div>
        </div>
      </div>
      <Button style={{ width: "80vw" }}>Back</Button>
    </div>
  ) : (
    <Redirect to="/fishv3/" />
  );
}

export default Session;
