import React from "react";
import styles from "./lakeAccordion.module.css";
import Accordion from "react-bootstrap/Accordion";

function LakeAccordion(props) {
  return (
    <div className={styles.container}>
      <Accordion className={styles.accordian}>
        {props.lakes.map((lake, index) => (
          <div
            onClick={() => {
              props.selectLake(index);
            }}
            className={styles.lakeItem}
          >
            {lake.name}
          </div>
        ))}
        <div className={styles.lakeItem}>New Lake</div>
      </Accordion>
    </div>
  );
}

export default LakeAccordion;
