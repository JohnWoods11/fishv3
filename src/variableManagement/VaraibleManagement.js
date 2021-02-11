import React from "react";
import styles from "./variableManagement.module.css";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import VariableManager from "./VariableManager";
import { Link } from "react-router-dom";

function VariableManagement(props) {
  const addVariable = (newVariable) => {
    switch (props.filter) {
      case "lakes":
        props.addLake(newVariable);
        break;
      case "baits":
        props.addBait(newVariable);
        break;
      case "styles":
        props.addStyle(newVariable);
        break;
      case "species":
        props.addSpecies(newVariable);
    }
  };

  const editVarName = (variableIndex) => {
    props.editVarName(props.filter, variableIndex);
  };

  const deleteVariable = (variableIndex) => {
    props.deleteVariable(props.filter, variableIndex);
  };

  const setCurrentVariable = (variableIndex) => {
    props.setCurrentVariable(props.filter, variableIndex);
  };

  return (
    <div className={styles.container}>
      <div className={styles.managementInfo}>
        <div className={styles.infoHeader}>My variables</div>
        <div className={styles.infoBody}>
          you keep the casts when deleting variables
        </div>
      </div>
      <ButtonGroup className={styles.variableSelectors}>
        <Button
          variant={props.filter === "lakes" ? "success" : "primary"}
          onClick={() => {
            props.setFilter("lakes");
          }}
        >
          Lakes
        </Button>
        <Button
          variant={props.filter === "baits" ? "success" : "primary"}
          onClick={() => {
            props.setFilter("baits");
          }}
        >
          Baits
        </Button>
        <Button
          variant={props.filter === "styles" ? "success" : "primary"}
          onClick={() => {
            props.setFilter("styles");
          }}
        >
          Styles
        </Button>
        <Button
          variant={props.filter === "species" ? "success" : "primary"}
          onClick={() => {
            props.setFilter("species");
          }}
        >
          Species
        </Button>
      </ButtonGroup>

      {props.filter === "baits" ? (
        <VariableManager
          variables={props.baits}
          addVariable={addVariable}
          setCurrentVariable={setCurrentVariable}
          editVarName={editVarName}
          deleteVar={deleteVariable}
        ></VariableManager>
      ) : props.filter === "styles" ? (
        <VariableManager
          variables={props.styles}
          addVariable={addVariable}
          setCurrentVariable={setCurrentVariable}
          editVarName={editVarName}
          deleteVar={deleteVariable}
        ></VariableManager>
      ) : props.filter === "species" ? (
        <VariableManager
          variables={props.species}
          addVariable={addVariable}
          setCurrentVariable={setCurrentVariable}
          editVarName={editVarName}
          deleteVar={deleteVariable}
        ></VariableManager>
      ) : (
        <VariableManager
          variables={props.lakes}
          addVariable={addVariable}
          setCurrentVariable={setCurrentVariable}
          editVarName={editVarName}
          deleteVar={deleteVariable}
        ></VariableManager>
      )}

      <Link to="/fishv3/">
        <Button variant="primary" block>
          back
        </Button>
      </Link>
    </div>
  );
}

export default VariableManagement;
