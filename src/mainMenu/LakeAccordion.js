import React from "react";
import styles from "./lakeAccordion.module.css";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

function LakeAccordion(props) {
  return (
    <div className={styles.container}>
      <Accordion className={styles.accordian}>
        {props.lakes.map((lake, index) => (
          <Card
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
        ))}
        <Card
          className={styles.lakeItem}
          onClick={() => prompt("Enter the new lakes name:")}
        >
          New Lake
        </Card>
      </Accordion>
    </div>
  );
}

export default LakeAccordion;
