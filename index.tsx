import React, { Component } from "react";
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Hello from "./Hello";
import Login from "./src/Components/Login";
import "./style.css";

// Start the mocking conditionally.
import { worker } from "./src/mocks/browser";
worker.start();

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: "React"
    };
  }
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/dahboard">
              <Hello name={this.state.name} />
              <p>Start editing to see some magic happen :)</p>
            </Route>
            <Route path="/">
              <Login />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

render(<App />, document.getElementById("root"));
