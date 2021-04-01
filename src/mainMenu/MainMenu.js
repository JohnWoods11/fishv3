import React, { useState } from "react";
import styles from "./mainMenu.module.css";
import LakeAccordion from "./LakeAccordion";
import LakeStats from "./LakeStats";
import Button from "react-bootstrap/Button";
import { Link, useHistory } from "react-router-dom";
import SessionDash from "./SessionDash";
import ExtraLakeStats from "./ExtraLakeStats";

function MainMenu(props) {
  const [lakeSelected, setLakeSelected] = useState(null);
  const history = useHistory();
  const [isFishing, setIsFishing] = useState(false);
  const [dashIsFullScreen, setDashIsFullScreen] = useState(true);

  const fishLake = (index) => {
    setIsFishing(true);
  };

  const resetIsFishing = () => {
    setIsFishing(false);
  };

  const selectLake = (index) => {
    setLakeSelected(index);
    props.setCurrentVariable("lakes", index);
    props.lakeWeatherRefresh(index);
  };

  let my_selected_lake = lakeSelected;

  if (my_selected_lake === null) {
    my_selected_lake = props.getDefaultLake();
  }

  if (props.lakes === null || my_selected_lake >= props.lakes.length) {
    my_selected_lake = null;
    console.log("error: lakes === null or invalid index");
  }

  return (
    <div className={styles.menuContainer}>
      {" "}
      {isFishing ? (
        <div className={styles.sessionDashboard}>
          <SessionDash
            isFullScreen={dashIsFullScreen}
            lakes={props.lakes}
            lakeIndex={my_selected_lake}
            resetIsFishing={resetIsFishing}
            startSession={props.startSession}
          ></SessionDash>{" "}
        </div>
      ) : (
        <div className={styles.fullScreenFishingDash}>
          <LakeAccordion
            className={styles.lakeAccordion}
            lakes={props.lakes}
            selectLake={selectLake}
            currentIndex={my_selected_lake}
            addLake={props.addLake}
          ></LakeAccordion>
          <LakeStats
            className={styles.lakeStats}
            lakes={props.lakes}
            lakeIndex={my_selected_lake}
            fishLake={fishLake}
            mSToReadable={props.mSToReadable}
            setCurrentVariable={props.setCurrentVariable}
            setLocation={props.setLocation}
            manualSetLocation={props.manualSetLocation}
            currentSession={props.currentSession}
          ></LakeStats>
        </div>
      )}
      <div className={styles.extraStats}>
        <ExtraLakeStats
          lakes={props.lakes}
          lakeIndex={my_selected_lake}
          fishLake={fishLake}
          setCurrentVariable={props.setCurrentVariable}
        ></ExtraLakeStats>
      </div>
      <div className={styles.optionsWrapper}>
        <div
          className={
            dashIsFullScreen
              ? styles.optionButtonsClosed
              : styles.optionButtonsOpened
          }
        >
          <div
            className={styles.dashboardExtender}
            onClick={() => setDashIsFullScreen(!dashIsFullScreen)}
          >
            <p style={{ fontSize: "x-large" }}>Stats and Settings</p>
          </div>
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
      </div>
    </div>
  );
}

export default MainMenu;
