import React, { useState } from "react";
import styles from "./variableManagement.module.css";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import VariableManager from "./VariableManager";
import { Link } from "react-router-dom";

function VariableManagement(props) {
  const [filter, setFilter] = useState("lakes");

  const addVariable = (newVariable) => {
    switch (filter) {
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
    props.editVarName(filter, variableIndex);
  };

  const deleteVariable = (variableIndex) => {
    props.deleteVariable(filter, variableIndex);
  };

  const setCurrentVariable = (variableIndex) => {
    props.setCurrentVariable(filter, variableIndex);
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
          variant={filter === "lakes" ? "success" : "primary"}
          onClick={() => {
            setFilter("lakes");
          }}
        >
          Lakes
        </Button>
        <Button
          variant={filter === "baits" ? "success" : "primary"}
          onClick={() => {
            setFilter("baits");
          }}
        >
          Baits
        </Button>
        <Button
          variant={filter === "styles" ? "success" : "primary"}
          onClick={() => {
            setFilter("styles");
          }}
        >
          Styles
        </Button>
        <Button
          variant={filter === "species" ? "success" : "primary"}
          onClick={() => {
            setFilter("species");
          }}
        >
          Species
        </Button>
      </ButtonGroup>

      {filter === "baits" ? (
        <VariableManager
          variables={props.baits}
          addVariable={addVariable}
          setCurrentVariable={setCurrentVariable}
          editVarName={editVarName}
          deleteVar={deleteVariable}
        ></VariableManager>
      ) : filter === "styles" ? (
        <VariableManager
          variables={props.styles}
          addVariable={addVariable}
          setCurrentVariable={setCurrentVariable}
          editVarName={editVarName}
          deleteVar={deleteVariable}
        ></VariableManager>
      ) : filter === "species" ? (
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
