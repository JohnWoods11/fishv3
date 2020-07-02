import React from "react";
import styles from "./variableManagement.module.css";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import VariableManager from "./VariableManager";

function VariableManagement(props) {
  return (
    <div className={styles.container}>
      <div className={styles.managementInfo}>
        <div className={styles.infoHeader}>Variable Management</div>
        <div className={styles.infoBody}>
          you keep the casts when deleting variables
        </div>
      </div>
      <ButtonGroup className={styles.variableSelectors}>
        <Button>Lakes</Button>
        <Button>Baits</Button>
        <Button>Styles</Button>
        <Button>Species</Button>
      </ButtonGroup>
      <VariableManager></VariableManager>
    </div>
  );
}

export default VariableManagement;
