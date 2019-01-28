import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom";

import Books from "./pages/Books";
import Save from "./pages/Save";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/save">Save</Link>
            </li>
          </ul>
          <Switch>
            {"Your routes go here!"}
            <Route exact path="/" component={Books} />
            <Route exact path="/save" component={Save} />
            {/* Delete */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
