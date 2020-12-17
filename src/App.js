import React from "react";
import styles from "./app.module.css";
import Nav from "./nav/Nav";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import MainMenu from "./mainMenu/MainMenu";
import VariableManagement from "./variableManagement/VaraibleManagement";
import "bootstrap/dist/css/bootstrap.min.css";
import Stats from "./stats/Stats";
import Variable from "./variable/Variable";
import DevData from "./DevData";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lakes: [],
      baits: [],
      styles: [],
      species: [],
      castHistory: [],
      currentVariable: ["lakes", 0],
    };
  }
  componentDidMount() {
    let devState = DevData(100000);
    console.log(devState);
    this.setState({
      lakes: devState.lakes,
      baits: devState.baits,
      styles: devState.styles,
      species: devState.species,
      castHistory: devState.castHistory,
    });
  }

  addLake = (lakeName) => {
    let newLakes = [...this.state.lakes];
    let newLake = {
      name: lakeName,
      lakes: [{ name: lakeName, duration: 0, catches: 0, castIndexes: [] }],
    };
    newLakes.push(newLake);
    this.setState({ lakes: newLakes });
  };

  addBait = (baitName) => {
    let newBaits = [...this.state.baits];
    let newBait = { name: baitName, castIndexes: [] };
    newBaits.push(newBait);
    this.setState({ baits: newBaits });
  };

  addStyle = (styleName) => {
    let newStyles = [...this.state.styles];
    let newStyle = { name: styleName, castIndexes: [] };
    newStyles.push(newStyle);
    this.setState({ styles: newStyles });
  };

  addSpecies = (speciesName) => {
    let NewSpecies = [...this.state.species];
    let NewSpecie = { name: speciesName, castIndexes: [] };
    NewSpecies.push(NewSpecie);
    this.setState({ species: NewSpecies });
  };

  editVarName = (property, index) => {
    let newName = prompt("New name:", `${this.state[property][index].name}`);
    if (newName) {
      let editedVariables = [...this.state[property]];
      editedVariables[index].name = newName;
      this.setState({ [property]: editedVariables });
    }
  };

  deleteVar = (property, index) => {
    alert("no work!");
  };

  setCurrentVariable = (filter, index) => {
    this.setState({
      currentVariable: { variableType: filter, variableIndex: index },
    });
  };

  nextVar = () => {
    let newCurrentVariable = this.state.currentVariable;
    newCurrentVariable.variableIndex ===
    this.state[newCurrentVariable.variableType].length - 1
      ? (newCurrentVariable.variableIndex = 0)
      : newCurrentVariable.variableIndex++;
    this.setState({ currentVariable: newCurrentVariable });
  };

  prevVar = () => {
    let newCurrentVariable = this.state.currentVariable;
    newCurrentVariable.variableIndex === 0
      ? (newCurrentVariable.variableIndex =
          this.state[newCurrentVariable.variableType].length - 1)
      : newCurrentVariable.variableIndex--;
    this.setState({ currentVariable: newCurrentVariable });
  };

  mSToReadable = (milliseconds) => {
    let seconds = (milliseconds / 1000) % 60;
    let secondsNoDecimal = seconds.toFixed();
    let minutes = ((milliseconds / 1000 - seconds) / 60) % 60;
    let hours = ((milliseconds / 1000 - seconds) / 60 - minutes) / 60;

    return `${hours < 10 ? `0${hours}` : hours}:${
      minutes < 10 ? `0${minutes}` : minutes
    }:${secondsNoDecimal < 10 ? `0${secondsNoDecimal}` : secondsNoDecimal}`;
  };

  mSToDate = (milliseconds) => {
    let date = new Date();
    date.setTime(milliseconds);
    return date;
  };

  mSToHours = (milliseconds) => {
    let hours = (milliseconds/86400).toFixed();
    return hours < 1 ? "less than 1 hour" : `${hours} hours`;
  }

  render() {
    return (
      <div className={styles.app}>
        <Router>
          <Nav></Nav>
          <Switch>
            <Route
              path="/fishv3/"
              exact
              render={(props) => (
                <MainMenu
                  lakes={this.state.lakes}
                  addLake={this.addLake}
                  setCurrentVariable={this.setCurrentVariable}
                  mSToReadable={this.mSToReadable}
                ></MainMenu>
              )}
            ></Route>
          </Switch>
          <Switch>
            <Route
              path="/fishv3/manage"
              render={(props) => (
                <VariableManagement
                  lakes={this.state.lakes}
                  baits={this.state.baits}
                  styles={this.state.styles}
                  species={this.state.species}
                  addLake={this.addLake}
                  addBait={this.addBait}
                  addStyle={this.addStyle}
                  addSpecies={this.addSpecies}
                  setCurrentVariable={this.setCurrentVariable}
                  editVarName={this.editVarName}
                  deleteVar={this.deleteVar}
                  mSToReadable={this.mSToReadable}
                ></VariableManagement>
              )}
            ></Route>
          </Switch>

          <Switch>
            <Route
              path="/fishv3/stats"
              render={(props) => (
                <Stats
                  lakes={this.state.lakes}
                  baits={this.state.baits}
                  styles={this.state.styles}
                  species={this.state.species}
                  castHistory={this.state.castHistory}
                ></Stats>
              )}
            ></Route>
          </Switch>

          <Switch>
            <Route
              path="/fishv3/variable"
              render={(props) => (
                <Variable
                  lakes={this.state.lakes}
                  baits={this.state.baits}
                  styles={this.state.styles}
                  species={this.state.species}
                  castHistory={this.state.castHistory}
                  variable={this.state.currentVariable}
                  nextVar={this.nextVar}
                  prevVar={this.prevVar}
                  mSToReadable={this.mSToReadable}
                  mSToDate={this.mSToDate}
                  mSToHours={this.mSToHours}
                ></Variable>
              )}
            ></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
