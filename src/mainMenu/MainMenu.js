import React, { useState } from "react";
import styles from "./mainMenu.module.css";
import LakeAccordion from "./LakeAccordion";
import LakeStats from "./LakeStats";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import SessionDash from "./SessionDash";
import ExtraLakeStats from "./ExtraLakeStats";

function MainMenu(props) {
  const [lakeSelected, setLakeSelected] = useState(null);
  const [isFishing, setIsFishing] = useState(false);
  const [dashIsFullScreen, setDashIsFullScreen] = useState(false);

  const fishLake = (index) => {
    setIsFishing(true);
  };

  const resetIsFishing = () => {
    setIsFishing(false);
    setLakeSelected(null);
  };

  const selectLake = (index) => {
    setLakeSelected(index);
    props.setCurrentVariable("lakes", index);
  };

  return (
    <div className={styles.menuContainer}>
      {" "}
      {isFishing ? (
        <div
          className={
            dashIsFullScreen
              ? styles.fullScreenSessionDash
              : styles.sessionDashboard
          }
        >
          <SessionDash
            isFullScreen={dashIsFullScreen}
            lakes={props.lakes}
            lakeIndex={lakeSelected}
            resetIsFishing={resetIsFishing}
          ></SessionDash>{" "}
        </div>
      ) : (
        <div
          className={
            dashIsFullScreen
              ? styles.fullScreenFishingDash
              : styles.fishingDashboard
          }
        >
          <LakeAccordion
            className={styles.lakeAccordion}
            lakes={props.lakes}
            selectLake={selectLake}
            currentIndex={lakeSelected}
            addLake={props.addLake}
          ></LakeAccordion>
          <LakeStats
            className={styles.lakeStats}
            isFullScreen={dashIsFullScreen}
            lakes={props.lakes}
            lakeIndex={lakeSelected}
            fishLake={fishLake}
            mSToReadable={props.mSToReadable}
            setCurrentVariable={props.setCurrentVariable}
            setLocation={props.setLocation}
            manualSetLocation={props.manualSetLocation}
          ></LakeStats>
        </div>
      )}
      {dashIsFullScreen && !isFishing ? (
        <div className={styles.extraStats}>
          <ExtraLakeStats
            lakes={props.lakes}
            lakeIndex={lakeSelected}
            fishLake={fishLake}
            setCurrentVariable={props.setCurrentVariable}
          ></ExtraLakeStats>
        </div>
      ) : null}
      <div
        className={styles.dashboardExtender}
        onClick={() => setDashIsFullScreen(!dashIsFullScreen)}
      >
        {!dashIsFullScreen ? "Full screen" : "Exit full screen"}
      </div>
      {!dashIsFullScreen ? (
        <div className={styles.optionButtons}>
          <div className={styles.buttonContainer}>
            <div className={styles.buttonInfoContainer}>
              <div className={styles.buttonInfoHeader}>
                Manage user variables
              </div>
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
