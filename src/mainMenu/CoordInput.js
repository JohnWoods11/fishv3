import React from "react";
import Button from "react-bootstrap/Button";
import styles from "./coordInput.module.css";

function CoordInput(props) {
  const manualUpdate = () => {
    console.log(props)
    let latitude = prompt("Latitude", !props.coords ? "" : props.coords.latitude);
    let longitude = prompt("Longitude", !props.coords ? "" : props.coords.longitude);
    console.log(`${latitude}, ${longitude}`);
    if (latitude === null || longitude === null) {
      return;
    }
    latitude = Number(latitude);
    longitude = Number(longitude);
    if (isNaN(latitude) || isNaN(longitude)) {
      alert("Longitude and latitude must be numbers");
      return;
    }
    if (latitude < -90 || latitude > 90) {
      if (longitude < -180 || longitude > 180) {
        alert(
          "Latitude must be between -90 and 90 and longitude must be between -180 and 180"
        );
        return;
      } else {
        alert("Latitude must be between -90 and 90");
        return;
      }
    }
    if (longitude < -180 || longitude > 180) {
      alert("Longitude must between -180 and 180");
      return;
    }
    props.manualSetLocation(latitude, longitude);
  };

  return (
    <div className={styles.container}>
      <div className={styles.hbox}>
        <div>
          {props.coords
            ? `${props.coords.latitude.toFixed(
                2
              )}N ${props.coords.longitude.toFixed(2)}E`
            : "--"}
        </div>
        <div className={styles.hbox}>
          <Button onClick={() => props.setLocation()}>&#9678;</Button>
          <Button onClick={manualUpdate}>&#9998;</Button>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default CoordInput;
