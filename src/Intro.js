import React, { Component } from "react";
import { Container, Box, Typography, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Header from "./Header";
import SelectContainer from "./SelectContainer";
import ResultContainer from "./ResultContainer";
import Fab from "@material-ui/core/Fab";
// import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";

const styles = theme => ({
  container: {
    display: "flex",
    flexDirection: "column"
  },
  floatingBotton: {
    position: "fixed",
    bottom: 30,
    right: 30
  },
  progress: {
    position: "fixed",
    top: "50%",
    left: "50%"
  }
});

class Intro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMenu: true
    };
  }

  onClickAction = () => {
    const { selectedMenu } = this.state;

    this.setState({
      selectedMenu: !selectedMenu
    });
  };

  render() {
    const { onClickAction } = this;
    const { selectedMenu } = this.state;
    const { classes } = this.props;

    return (
      <Container className={classes.container}>
        <Header />
        {selectedMenu ? <SelectContainer /> : <ResultContainer />}
        <Box className={classes.floatingBotton} onClick={onClickAction}>
          <Fab variant="extended" color="primary" aria-label="add">
            {selectedMenu ? "Jasmine 옷 추천해줘!" : "다시 한번 해볼게!"}
          </Fab>
        </Box>
        {/* <Box className={classes.progress}>
          <CircularProgress disableShrink />
        </Box> */}
      </Container>
    );
  }
}

export default withStyles(styles)(Intro);
