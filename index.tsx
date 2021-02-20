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
  componentDidMount = async () => {
    const result = await fetch("http:localhost:3001/posts/1");
    alert(JSON.stringify(result));
    alert("hello");
  };

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
