import React from "react";
import styles from "./app.module.css";
import Nav from "./nav/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainMenu from "./mainMenu/MainMenu";
import VariableManagement from "./variableManagement/VaraibleManagement";
import "bootstrap/dist/css/bootstrap.min.css";
import Stats from "./stats/Stats";
import Variable from "./variable/Variable";
import DevData from "./DevData";
import Session from "./session/Session";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lakes: [],
      baits: [],
      styles: [],
      species: [],
      castHistory: [],
      currentVariable: {},
      location: null,
      managerFilter: "lakes",
      currentSession: null,
    };
  }
  componentDidMount() {
    if (!localStorage.getItem("app-data")) {
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
    console.log(this.state.managerFilter);
    if (localStorage.getItem("app-data")) {
      let appData = JSON.parse(localStorage.getItem("app-data"));
      console.log(appData);
      this.setState(
        {
          lakes: appData.lakes,
          baits: appData.baits,
          styles: appData.styles,
          species: appData.species,
          castHistory: appData.castHistory,
          currentSession: appData.currentSession,
        },
        function () {
          this.weatherRefresh();
        }
      );
    }
  }

  getDefaultLake = () => {
    for (let index = 0; index < this.state.lakes.length; index++) {
      if (this.state.lakes[index] !== null) {
        return index;
      }
    }
    return null;
  };

  addLake = (lakeName) => {
    let newLakes = [...this.state.lakes];
    let newLake = {
      name: lakeName,
      lakes: [
        {
          name: lakeName,
          duration: 0,
          catches: 0,
          heaviestCatch: { weight: 0, species: null },
          castIndexes: [],
        },
      ],
      weather: { data: null, lastUpdated: null },
      coordinates: null,
    };
    newLakes.push(newLake);
    this.setState({ lakes: newLakes }, () => {
      localStorage.setItem("app-data", JSON.stringify(this.state));
    });
  };

  addBait = (baitName) => {
    let newBaits = [...this.state.baits];
    let newBait = {
      name: baitName,
      duration: 0,
      catches: 0,
      heaviestCatch: { weight: 0, species: null },
      castIndexes: [],
    };
    newBaits.push(newBait);
    this.setState({ baits: newBaits }, () => {
      localStorage.setItem("app-data", JSON.stringify(this.state));
    });
  };

  addStyle = (styleName) => {
    let newStyles = [...this.state.styles];
    let newStyle = {
      name: styleName,
      duration: 0,
      catches: 0,
      heaviestCatch: { weight: 0, species: null },
      castIndexes: [],
    };
    newStyles.push(newStyle);
    this.setState({ styles: newStyles }, () => {
      localStorage.setItem("app-data", JSON.stringify(this.state));
    });
  };

  addSpecies = (speciesName) => {
    let NewSpecies = [...this.state.species];
    let NewSpecie = {
      name: speciesName,
      catches: 0,
      heaviestCatch: { weight: 0, species: null },
      castIndexes: [],
    };
    NewSpecies.push(NewSpecie);
    this.setState({ species: NewSpecies }, () => {
      localStorage.setItem("app-data", JSON.stringify(this.state));
    });
  };

  editVarName = (property, index) => {
    let newName = prompt("New name:", `${this.state[property][index].name}`);
    if (newName) {
      let editedVariables = [...this.state[property]];
      editedVariables[index].name = newName;
      if (property === "lakes") {
        editedVariables[index].lakes[0].name = newName;
      }
      this.setState({ [property]: editedVariables }, () => {
        localStorage.setItem("app-data", JSON.stringify(this.state));
      });
    }
  };

  deleteVar = (property, index) => {
    alert(`${property} + ${index}`);
    let updatedVariables = [...this.state[property]];
    updatedVariables[index] = null;
    this.setState({ [property]: updatedVariables }, () => {
      localStorage.setItem("app-data", JSON.stringify(this.state));
    });
  };

  setCurrentVariable = (filter, index, callback = null) => {
    if (callback === null) {
      this.setState({
        currentVariable: { variableType: filter, variableIndex: index },
      });
    } else {
      this.setState({
        currentVariable: { variableType: filter, variableIndex: index },
        callback,
      });
    }
  };

  nextVar = () => {
    let newCurrentVariable = this.state.currentVariable;
    do {
      newCurrentVariable.variableIndex ===
      this.state[newCurrentVariable.variableType].length - 1
        ? (newCurrentVariable.variableIndex = 0)
        : newCurrentVariable.variableIndex++;
    } while (
      this.state[newCurrentVariable.variableType][
        newCurrentVariable.variableIndex
      ] === null
    );

    this.setState({ currentVariable: newCurrentVariable });
  };

  prevVar = () => {
    let newCurrentVariable = this.state.currentVariable;
    do {
      newCurrentVariable.variableIndex === 0
        ? (newCurrentVariable.variableIndex =
            this.state[newCurrentVariable.variableType].length - 1)
        : newCurrentVariable.variableIndex--;
    } while (
      this.state[newCurrentVariable.variableType][
        newCurrentVariable.variableIndex
      ] === null
    );
    this.setState({ currentVariable: newCurrentVariable });
  };

  setManagerFilter = (newFilter) => {
    let newManagerFilter = this.state.managerFilter;
    newManagerFilter = newFilter;
    this.setState({ managerFilter: newManagerFilter });
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
    let hours = (milliseconds / 3600000).toFixed();
    return hours < 1 ? " 0 h" : `${hours} h`;
  };

  // Weather and map features

  // Getting current coordinates

  getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      this.locationSuccess,
      this.locationError,
      { enableHighAccuracy: false, maximumAge: Infinity, timeout: 10000 }
    );
  };

  locationSuccess = (pos) => {
    let newCoordinates = {
      latitude: pos.coords.latitude,
      longitude: pos.coords.longitude,
    };
    let coordinateUpdate = this.didCoordinatesUpdate(
      this.state.lakes[this.state.currentVariable.variableIndex].coordinates,
      newCoordinates
    );
    let newLakes = [...this.state.lakes];
    newLakes[
      this.state.currentVariable.variableIndex
    ].coordinates = newCoordinates;
    this.setState({ lakes: newLakes }, () => {
      localStorage.setItem("app-data", JSON.stringify(this.state));
      this.lakeWeatherRefresh(
        this.state.currentVariable.variableIndex,
        coordinateUpdate
      );
    });
  };

  locationError = (err) => {
    console.log(`Error code: ${err.code}   message: ${err.message}`);
  };

  setLocation = () => {
    this.getLocation();
  };

  manualSetLocation = (newLatitude, newLongitude) => {
    let newCoordinates = {
      latitude: newLatitude,
      longitude: newLongitude,
    };
    let coordinateUpdate = this.didCoordinatesUpdate(
      this.state.lakes[this.state.currentVariable.variableIndex].coordinates,
      newCoordinates
    );
    let newLakes = [...this.state.lakes];
    newLakes[
      this.state.currentVariable.variableIndex
    ].coordinates = newCoordinates;
    console.log(newCoordinates);
    this.setState({ lakes: newLakes }, () => {
      localStorage.setItem("app-data", JSON.stringify(this.state));
      this.lakeWeatherRefresh(
        this.state.currentVariable.variableIndex,
        coordinateUpdate
      );
    });
  };

  didCoordinatesUpdate(oldCoordinates, newCoordinates) {
    let coordinateUpdate = false;
    if (
      oldCoordinates.latitude.toFixed(2) !==
        newCoordinates.latitude.toFixed(2) &&
      oldCoordinates.longitude.toFixed(2) !==
        newCoordinates.longitude.toFixed(2)
    ) {
      coordinateUpdate = true;
    }
    console.log(oldCoordinates);
    console.log(newCoordinates);
    return coordinateUpdate;
  }

  // Getting weather (RETURNS PROMISE CHAIN... MUST WAIT FOR RETURN ON CALL)
  getWeather = (coordinates) => {
    let key = "9224b10de6e78631ab14b66a8c44d997";
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.latitude.toFixed(
      4
    )}&lon=${coordinates.longitude.toFixed(
      4
    )}&exclude=current,minutely,alert&units=metric&appid=${key}`;

    return fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response not ok");
        }
        return response.text();
      })
      .then((y) => JSON.parse(y))
      .catch((error) =>
        console.error(
          "There has been a problem with your fetch operation: ",
          error
        )
      );
  };

  //store weather data and update time
  updateWeather = (lakeIndex, weather) => {
    let newLakes = [...this.state.lakes];
    let currentDate = new Date();
    newLakes[lakeIndex].weather.data = weather;
    newLakes[lakeIndex].weather.lastUpdated = currentDate.getTime();
    this.setState({ lakes: newLakes }, () => {
      localStorage.setItem("app-data", JSON.stringify(this.state));
    });
  };

  //wait for weather api response then update weather
  setWeather = (lakeIndex) => {
    if (this.state.lakes[lakeIndex].coordinates !== null) {
      console.log(this.state.lakes[lakeIndex].coordinates);
      this.getWeather(this.state.lakes[lakeIndex].coordinates).then((weather) =>
        this.updateWeather(lakeIndex, weather)
      );
    }
  };

  //update all lakes weather if 30+ mins old
  weatherRefresh = () => {
    let time = new Date().getTime();
    console.log(time);
    for (let i = 0; i < this.state.lakes.length; i++) {
      if (this.state.lakes[i] !== null) {
        console.log(
          `${this.state.lakes[i].weather.lastUpdated}, ${
            time - this.state.lakes[i].weather.lastUpdated > 1800000
          }`
        );
        if (
          this.state.lakes[i].coordinates &&
          time - this.state.lakes[i].weather.lastUpdated > 1800000
        ) {
          console.log(`fetching ${i}`);
          this.setWeather(i);
        }
      }
    }
  };

  //update single lakes weather if 30+ minutes old
  lakeWeatherRefresh = (lakeIndex, coordinateUpdate = false) => {
    let time = new Date().getTime();
    if (this.state.lakes[lakeIndex] !== null) {
      if (this.state.lakes[lakeIndex].coordinates) {
        if (
          time - this.state.lakes[lakeIndex].weather.lastUpdated > 1800000 ||
          coordinateUpdate
        ) {
          console.log(`fetching ${lakeIndex}`);
          this.setWeather(lakeIndex);
        }
      }
    }
  };

  startSession = (lakeIndex) => {
    let newCurrentSession = this.state.currentSession;
    newCurrentSession = {
      lakeIndex: lakeIndex,
      casting: false,
      casts: 0,
      bites: 0,
      catches: 0,
      castingDuration: 0,
      bait: null,
      style: null,
      currentCast: {
        catchSuccess: null,
        castTime: null,
        reelInTime: null,
        bites: 0,
      },
      castHistory: [],
    };
    this.setState({ currentSession: newCurrentSession }, () => {
      localStorage.setItem("app-data", JSON.stringify(this.state));
    });
  };

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
                  getDefaultLake={this.getDefaultLake}
                  addLake={this.addLake}
                  currentVariable={this.state.currentVariable}
                  setCurrentVariable={this.setCurrentVariable}
                  mSToReadable={this.mSToHours}
                  setLocation={this.setLocation}
                  manualSetLocation={this.manualSetLocation}
                  lakeWeatherRefresh={this.lakeWeatherRefresh}
                  startSession={this.startSession}
                  currentSession={this.state.currentSession}
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
                  filter={this.state.managerFilter}
                  setFilter={this.setManagerFilter}
                  setCurrentVariable={this.setCurrentVariable}
                  editVarName={this.editVarName}
                  deleteVariable={this.deleteVar}
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

          <Switch>
            <Route
              path="/fishv3/session"
              render={(props) => (
                <Session
                  currentSession={this.state.currentSession}
                  lakes={this.state.lakes}
                  baits={this.state.baits}
                  styles={this.state.styles}
                  species={this.state.species}
                ></Session>
              )}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
