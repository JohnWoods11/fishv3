import React from "react";
import styles from "./lakeAccordion.module.css";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

function LakeAccordion(props) {
  const addLake = () => {
    let newLakeName = prompt("Enter the new lakes name:");
    if (newLakeName) {
      props.addLake(newLakeName);
    }
  };

  return (
    <div className={styles.container}>
      <Accordion className={styles.accordian}>
        {props.lakes.map((lake, index) =>
          lake === null ? null : (
            <Card
              key={index}
              style={{
                backgroundColor:
                  index === props.currentIndex ? "rgb(0,123,255)" : "white",
                color: index === props.currentIndex ? "white" : "black",
              }}
              onClick={() => {
                props.selectLake(index);
              }}
              className={styles.lakeItem}
            >
              {lake.name}
            </Card>
          )
        )}
        <Card className={styles.lakeItem} onClick={addLake}>
          New Lake
        </Card>
      </Accordion>
    </div>
  );
}

export default LakeAccordion;
