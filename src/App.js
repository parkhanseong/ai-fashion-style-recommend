import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Intro from "./Intro";

class App extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Router>
        <div>
          <Route exact path="/" component={Intro} />
        </div>
      </Router>
    );
  }
}

export default App;
