import React from "react";
import styles from "./variable.module.css";
import TimeGraph from "./TimeGraph";
import { Redirect } from "react-router-dom";
import DayGraph from "./DayGraph";
import CastList from "./CastList";

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

  const variable =
    props.variable.variableType === "lakes"
      ? props.lakes[props.variable.variableIndex].lakes[0]
      : props[props.variable.variableType][props.variable.variableIndex];

  if (variable.castIndexes === undefined) {
    return <Redirect to="/fishv3/manage"> </Redirect>;
  }
  variable.castIndexes.map((castIndex, index) => {
    let reelInTime = props.mSToDate(props.castHistory[castIndex].reelInTime);
    let castDuration = props.castHistory[castIndex].duration / 60000;
    let catchTime = new Date();
    catchTime.setMilliseconds(reelInTime);

    let reelInHour = catchTime.getHours();
    let reelInMinute = catchTime.getMinutes();
    let reelInDate = catchTime.getDate();
    let reelInMonth = catchTime.getMonth();

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
  });

  yearlyInfo.splice(59, 3);
  yearlyInfo.splice(120, 1);
  yearlyInfo.splice(181, 1);
  yearlyInfo.splice(273, 1);
  yearlyInfo.splice(334, 1);

  return (
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
          <div>
            {props.variable.variableType === "lakes"
              ? "Geolocation and aerialimage here!"
              : null}
          </div>
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
          </div>
          <div></div>
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
              <div style={{ width: `${90 / 24}vw`, textAlign: "center" }}>
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
          styles={props.styles}
          lakes={props.lakes}
          baits={props.baits}
          mSToDate={props.mSToDate}
        ></CastList>
      </div>
    </div>
  );
}

export default Variable;
