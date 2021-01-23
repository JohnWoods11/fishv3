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
            date.getUTCHours() < 10
              ? `0${date.getUTCHours()}`
              : date.getUTCHours()
          }:${
            date.getUTCMinutes() < 10
              ? `0${date.getUTCMinutes()}`
              : date.getUTCMinutes()
          }`}</div>
          <div>
            {`${date.getUTCDate()}/${
              date.getUTCMonth() + 1
            }/${date.getUTCFullYear()}
          `}
          </div>{" "}
        </div>
      </div>
    );
  };

  const bodyInfo = (cast) => {
    let castDate = props.mSToDate(cast.castTime);
    let catchDate = props.mSToDate(cast.reelInTime);
    return (
      <div className={styles.hBox}>
        <div>
          <div>{`${props.styles[cast.style].name} with ${
            props.baits[cast.bait].name
          }`}</div>

          <div>
            <div>
              {`Cast Time: ${
                castDate.getUTCHours() < 10
                  ? `0${castDate.getUTCHours()}`
                  : castDate.getUTCHours()
              }:${
                castDate.getUTCMinutes() < 10
                  ? `0${castDate.getUTCMinutes()}`
                  : castDate.getUTCMinutes()
              }`}
            </div>
            <div>{`Duration: ${(
              cast.duration / 60000
            ).toFixed()} minutes`}</div>
          </div>
        </div>
        {cast.catch ? (
          <div>
            <div>
              {cast.weight}lb {props.species[cast.species].name}
            </div>
            <div>{`Catch Time: ${
              catchDate.getUTCHours() < 10
                ? `0${catchDate.getUTCHours()}`
                : catchDate.getUTCHours()
            }:${
              catchDate.getUTCMinutes < 10
                ? `0${catchDate.getUTCMinutes()}`
                : catchDate.getUTCMinutes()
            }`}</div>
          </div>
        ) : (
          <div></div>
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
        <Card
          className={styles.showItem}
          onClick={() => setNumberDisplayed(numberDisplayed + 10)}
        >
          show more
        </Card>
      </Accordion>
    </div>
  );
}

export default CastList;
