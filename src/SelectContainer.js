import React, { Component } from "react";
import { Container, Box, Typography, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Header from "./Header";
import ProductItemGrid from "./ProductItemGrid";
import Fab from "@material-ui/core/Fab";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";

const styles = theme => ({
  bodyBox: {
    display: "flex",
    flexDirection: "column"
  },
  buttonBox: {
    display: "flex",
    flexDirection: "row",
    marginTop: theme.spacing(1),
    height: "50px"
  },
  buttonSave: {
    backgroundColor: theme.palette.primary.main,
    color: "white",
    marginRight: theme.spacing(2)
  },
  personalInfoBox: {
    display: "flex",
    flexDirection: "column",
    height: "100px"
  }
});

class Intro extends Component {
  onClickRecommend = () => {};

  render() {
    const { classes } = this.props;

    return (
      <Box className={classes.bodyBox}>
        <Box mt={5}>
          <Typography>좋아하는 옷들을 선택해주세요</Typography>
          <Typography>
            인공지능 스타일리스트 Jasmine이 원하는 스타일을 찾아드려요!
          </Typography>
        </Box>
        <Box mt={2} className={classes.personalInfoBox}>
          <Typography>성별을 선택해주세요</Typography>
          <Box className={classes.buttonBox}>
            <Button className={classes.buttonSave}>남자</Button>
            <Button className={classes.buttonSave}>여자</Button>
          </Box>
        </Box>
        <Box>
          <ProductItemGrid />
        </Box>
      </Box>
    );
  }
}

export default withStyles(styles)(Intro);
