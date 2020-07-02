import React, { useState } from "react";
import styles from "./mainMenu.module.css";
import LakeAccordion from "./LakeAccordion";
import LakeStats from "./LakeStats";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import SessionDash from "./SessionDash";

function MainMenu(props) {
  const [lakeSelected, setLakeSelected] = useState(null);
  const [isFishing, setIsFishing] = useState(false);
  const [dashIsFullscreen, setDashIsFullscreen] = useState(false);

  const fishLake = (index) => {
    setIsFishing(true);
  };

  const resetIsFishing = () => {
    setIsFishing(false);
    setLakeSelected(null);
  };

  const selectLake = (index) => {
    setLakeSelected(index);
  };

  return (
    <div className={styles.menuContainer}>
      {" "}
      {isFishing ? (
        <div
          className={
            dashIsFullscreen
              ? styles.fullScreenSessionDash
              : styles.sessionDashboard
          }
        >
          <SessionDash
            lakes={props.lakes}
            lakeIndex={lakeSelected}
            resetIsFishing={resetIsFishing}
          ></SessionDash>{" "}
        </div>
      ) : (
        <div
          className={
            dashIsFullscreen
              ? styles.fullScreenFishingDash
              : styles.fishingDashboard
          }
        >
          <LakeAccordion
            className={styles.lakeAccordion}
            lakes={props.lakes}
            selectLake={selectLake}
          ></LakeAccordion>
          <LakeStats
            className={styles.lakeStats}
            lakes={props.lakes}
            lakeIndex={lakeSelected}
            fishLake={fishLake}
          ></LakeStats>
        </div>
      )}
      <div
        className={styles.dashboardExtender}
        onClick={() => setDashIsFullscreen(!dashIsFullscreen)}
      ></div>
      {!dashIsFullscreen ? (
        <div className={styles.optionButtons}>
          <div className={styles.buttonContainer}>
            <div className={styles.buttonInfoContainer}>
              <div className={styles.buttonInfoHeader}>Manage variables</div>
              <div className={styles.buttonInfo}>
                look up, edit and create new lakes/baits..
              </div>
            </div>
            <Link to="/fishv3/manage">
              <Button className={styles.button}> </Button>
            </Link>
          </div>
          <div className={styles.buttonContainer}>
            <div className={styles.buttonInfoContainer}>
              <div className={styles.buttonInfoHeader}>Stats</div>
              <div className={styles.buttonInfo}>
                use stats to find the best variables for your session
              </div>
            </div>
            <Link to="/fishv3/stats">
              <Button className={styles.button}> </Button>
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default MainMenu;
