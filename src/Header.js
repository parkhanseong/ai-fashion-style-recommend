import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  Box,
  Typography,
  Button,
  Divider,
  Container,
  StylesProvider
} from "@material-ui/core";

const styles = theme => ({
  container: {
    display: "flex",
    // flex: 2,
    flexDirection: "column",
    justifyContent: "center",
    paddingLeft: 10,
    height: 40
    // backgroundColor: "skyblue",
    // border: 1 solid black
    // borderBottomWidth: 10,
    // borderBottomColor: "black"
  }
});

class Header extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Box
        className={classes.container}
        borderBottom={1}
        borderColor="grey.500"
      >
        <Typography>Jasmine - 인공지능 스타일리스트</Typography>
      </Box>
    );
  }
}

export default withStyles(styles)(Header);
