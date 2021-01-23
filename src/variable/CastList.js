import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import styles from "./castList.module.css";

function CastList(props) {
  const [numberDisplayed, setNumberDisplayed] = useState(10);
  let displayedCasts = props.castIndexes.slice(-numberDisplayed);

  const headerInfo = (cast) => {
    let date = props.mSToDate(cast.reelInTime);
    return (
      <div className={styles.hBox}>
        <div>{props.lakes[cast.lake].name}</div>
        <div className={styles.hBox}>
          <div>{`${
            date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()
          }:${
            date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
          }`}</div>
          <div>
            {`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}
          `}
          </div>{" "}
        </div>
      </div>
    );
  };

  const bodyInfo = (cast) => {
    let castDate = props.mSToDate(cast.castTime);
    return (
      <div className={styles.hBox}>
        <div>
          <div>{`${props.styles[cast.style].name} with ${
            props.baits[cast.bait].name
          }`}</div>

          <div>
            <div>
              {`Cast Time: ${
                castDate.getHours() < 10
                  ? `0${castDate.getHours()}`
                  : castDate.getHours()
              }:${
                castDate.getMinutes() < 10
                  ? `0${castDate.getMinutes()}`
                  : castDate.getMinutes()
              }`}
            </div>
            <div>{`Duration: ${(
              cast.duration / 60000
            ).toFixed()} minutes`}</div>
          </div>
        </div>
        {cast.catch ? (
          <div>catch</div>
        ) : (
          <div style={{ borderStyle: "solid" }}>&nbsp;</div>
        )}
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <Accordion className={styles.accordion}>
        {displayedCasts.map((castIndex, index) => (
          <Card>
            <Accordion.Toggle
              as={Card.Header}
              eventKey={index}
              style={{
                backgroundColor: props.castHistory[castIndex].catch
                  ? "green"
                  : "red",
              }}
            >
              <div>{headerInfo(props.castHistory[castIndex])}</div>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={index}>
              <Card.Body>{bodyInfo(props.castHistory[castIndex])}</Card.Body>
            </Accordion.Collapse>
          </Card>
        ))}
      </Accordion>
    </div>
  );
}

export default CastList;
