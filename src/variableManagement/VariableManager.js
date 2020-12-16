import React, { useState } from "react";
import styles from "./variableManager.module.css";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Redirect } from "react-router-dom";

function VariableManager(props) {
  const [toVariable, setToVariable] = useState(false);

  const addVariable = () => {
    let newVariable = prompt("New variable:");
    if (newVariable) {
      props.addVariable(newVariable);
    }
  };

  const goToVar = (index) => {
    props.setCurrentVariable(index);
    setToVariable(true);
  };

  const editVarName = (event, index) => {
    props.editVarName(index);
    event.stopPropagation();
  };

  const deleteVariable = (event) => {
    props.deleteVar();
    event.stopPropagation();
  };

  return toVariable ? (
    <Redirect to="/fishv3/variable"> </Redirect>
  ) : (
    <div className={styles.container}>
      <Accordion>
        {props.variables.map((variable, index) => (
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey={index}>
              <div
                className={styles.variableHeader}
                onClick={() => {
                  goToVar(index);
                }}
              >
                <div>{variable.name}</div>
                <div className={styles.buttons}>
                  <Button
                    className={styles.button}
                    variant="secondary"
                    onClick={(event) => {
                      editVarName(event, index);
                    }}
                  >
                    <div>&#9998;</div>
                  </Button>

                  <Button
                    className={styles.button}
                    variant="danger"
                    onClick={(event) => {
                      deleteVariable(event);
                    }}
                  >
                    &#10006;
                  </Button>
                </div>
              </div>
            </Accordion.Toggle>
          </Card>
        ))}
        <Accordion.Toggle
          as={Card.Header}
          style={{ backgroundColor: "lightGray" }}
          eventKey="0"
        >
          <div
            className={styles.variableHeader}
            onClick={() => {
              addVariable();
            }}
          >
            Add variable
          </div>
        </Accordion.Toggle>
      </Accordion>
    </div>
  );
}

export default VariableManager;
