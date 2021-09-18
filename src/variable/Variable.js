import React from "react";
import { Link } from "react-router-dom";
import styles from "./variable.module.css";
import Button from "react-bootstrap/Button";
import TimeGraph from "./TimeGraph";
import { Redirect } from "react-router-dom";
import DayGraph from "./DayGraph";
import CastList from "./CastList";
import CoordInput from "../mainMenu/CoordInput";

function Variable(props) {
  console.log(props.variable);
  const dailyinfo = [];
  for (let i = 0; i < 24; i++) {
    dailyinfo.push({ catches: 0, durationFished: 0 });
  }

  let yearlyInfo = [];
  for (let i = 0; i < 372; i++) {
    yearlyInfo.push({ catches: 0, durationFished: 0 });
  }
  if (!props.variable.variableType) {
    return <Redirect to="/fishv3/manage"></Redirect>;
  }

  let variable = null;
  let coordinates = null;
  let mapAPIAddress = null;

  if (
    props[props.variable.variableType][props.variable.variableIndex] !== null
  ) {
    if (props.variable.variableType === "lakes") {
      coordinates = props.lakes[props.variable.variableIndex].coordinates;
      if (coordinates !== null) {
        mapAPIAddress = `https://www.mapquestapi.com/staticmap/v5/map?key=A7omwtwwpDrrpg4x1QDSeCTy8VutBoT4&center=${coordinates.latitude},${coordinates.longitude}&zoom=16&size=200,200&type=sat`;
      }
      variable = props.lakes[props.variable.variableIndex].lakes[0];
    } else
      variable =
        props[props.variable.variableType][props.variable.variableIndex];

    if (variable.castIndexes === undefined) {
      return <Redirect to="/fishv3/manage"> </Redirect>;
    }
    //variable.castIndexes.map((castIndex) =>
    for (
      let castIndex = 0;
      castIndex < variable.castIndexes.length;
      castIndex++
    ) {
      let reelInTime = props.mSToDate(props.castHistory[castIndex].reelInTime);
      let castDuration = props.castHistory[castIndex].duration / 60000;
      let catchTime = new Date();
      catchTime.setMilliseconds(reelInTime);

      let reelInHour = catchTime.getUTCHours();
      let reelInMinute = catchTime.getUTCMinutes();
      let reelInDate = catchTime.getUTCDate();
      let reelInMonth = catchTime.getUTCMonth();

      if (props.castHistory[castIndex].catch) {
        dailyinfo[reelInHour].catches += 1;
        yearlyInfo[reelInMonth * 31 + reelInDate - 1].catches += 1;
      }
      let reelInHourMins = reelInMinute;

      dailyinfo[reelInHour].durationFished += reelInHourMins;
      for (
        let hour = 1, minutes = castDuration - reelInHourMins;
        minutes > 0;
        hour++
      ) {
        if (minutes > 59) {
          minutes -= 60;
          dailyinfo[(reelInHour + 24 - hour) % 24].durationFished += 60;
        } else {
          dailyinfo[(reelInHour + 24 - hour) % 24].durationFished += minutes;
          minutes -= minutes;
        }
      }
      yearlyInfo[
        reelInMonth * 31 + reelInDate - 1
      ].durationFished += castDuration;
    }

    yearlyInfo.splice(59, 3);
    yearlyInfo.splice(120, 1);
    yearlyInfo.splice(181, 1);
    yearlyInfo.splice(273, 1);
    yearlyInfo.splice(334, 1);
  }

  return variable == null ? null : (
    <div className={styles.container}>
      <div className={styles.variableHeader}>
        <div className={styles.navButton} onClick={props.prevVar}>
          &#x2190;
        </div>
        <div className={styles.variableName}>{variable.name}</div>
        <div className={styles.navButton} onClick={props.nextVar}>
          &#x2192;
        </div>
      </div>
      <div className={styles.basicVarInfo}>
        <div className={styles.map}>
          {props.variable.variableType === "lakes" ? (
            coordinates !== null ? (
              <img
                className={styles.mapImage}
                src={mapAPIAddress}
                alt="lake"
              ></img>
            ) : (
              <div>NO MAP DATA</div>
            )
          ) : null}
        </div>
        <div className={styles.basicInfo}>
          <div>
            <b>Time cast:</b> {props.mSToHours(variable.duration)}
          </div>
          <div>
            <b>Casts:</b> {variable.castIndexes.length}
          </div>
          <div>
            <b>Catches:</b> {variable.catches}
          </div>
          <div>
            <b>PB:</b>{" "}
            {variable.heaviestCatch.weight === 0
              ? "NA"
              : `${variable.heaviestCatch.weight} ${variable.heaviestCatch.species}`}
          </div> {props.variable.variableType === "lakes" ?
            <CoordInput coords={coordinates} setLocation={props.setLocation} manualSetLocation={props.manualSetLocation}></CoordInput> : null}
        </div>
      </div>
      <div className={styles.timeInfo}>
        <div>
          <div className={styles.dailyTime}>
            <div className={styles.dailyYScale}>
              <div>0h</div>
              <div>5h</div>
              <div>10h</div>
              <div>15h</div>
              <div>20h+</div>
            </div>
            <TimeGraph times={dailyinfo}></TimeGraph>
          </div>
          <div className={styles.dailyXScale}>
            {dailyinfo.map((time, index) => (
              <div
                style={{ width: `${90 / 24}vw`, textAlign: "center" }}
                key={index}
              >
                {index}
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className={styles.yearlyTime}>
            <div className={styles.dailyYScale}>
              <div>0h</div>
              <div>5h</div>
              <div>10h</div>
              <div>15h</div>
              <div>20h+</div>
            </div>
            <DayGraph days={yearlyInfo}></DayGraph>
          </div>
          <div className={styles.monthXScale}>
            <div className={styles.month}>J</div>
            <div className={styles.month}>F</div>
            <div className={styles.month}>M</div>
            <div className={styles.month}>A</div>
            <div className={styles.month}>M</div>
            <div className={styles.month}> J</div>
            <div className={styles.month}>J</div>
            <div className={styles.month}>A</div>
            <div className={styles.month}>S</div>
            <div className={styles.month}>O</div>
            <div className={styles.month}>N</div>
            <div className={styles.month}>D</div>
          </div>
        </div>
      </div>
      <div className={styles.castHistory}>
        <CastList
          castHistory={props.castHistory}
          castIndexes={variable.castIndexes}
          species={props.species}
          styles={props.styles}
          lakes={props.lakes}
          baits={props.baits}
          mSToDate={props.mSToDate}
        ></CastList>
      </div>
      <Link to="/fishv3/manage/">
        <Button variant="primary" block>
          back
        </Button>
      </Link>
    </div>
  );
}
export default Variable;
