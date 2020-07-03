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
    };
  }
  componentDidMount() {
    let devState = DevData(100);
    this.setState({
      lakes: devState.lakes,
      baits: devState.baits,
      styles: devState.styles,
      species: devState.species,
      castHistory: devState.castHistory,
    });
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
              render={(props) => <MainMenu lakes={this.state.lakes}></MainMenu>}
            ></Route>
          </Switch>
          <Switch>
            <Route
              path="/fishv3/manage"
              render={(props) => <VariableManagement></VariableManagement>}
            ></Route>
          </Switch>
          <Switch>
            <Route
              path="/fishv3/stats"
              render={(props) => <Stats></Stats>}
            ></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
