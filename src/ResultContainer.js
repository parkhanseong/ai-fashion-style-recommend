import React, { Component } from "react";
import { CardMedia } from "@material-ui/core";
import { Container, Box, Typography, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Header from "./Header";
import ProductItemGrid from "./ProductItemGrid";
import Fab from "@material-ui/core/Fab";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";

const styles = theme => ({
  container: {
    display: "flex",
    flexDirection: "column"
  },
  bodyBox: {
    display: "flex",
    flexDirection: "column",
    // backgroundColor: "green",
    alignItems: "center"
  },
  media: {
    height: 300,
    width: 300,
    marginBottom: theme.spacing(2),
    marginRight: theme.spacing(3)
  },
  ratio: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: 30
  },
  goShopping: {
    backgroundColor: theme.palette.primary.main,
    color: "white",
    marginRight: theme.spacing(2),
    marginTop: 30
  }
});

class ResultContainer extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Box className={classes.bodyBox}>
        <Box mt={5}>
          <Typography>
            '허브'님은 도시의 차가운 여성! 오피스룩으로 올해 연애도 성공!
          </Typography>
          <Typography>스타일이 마음에 드시나요?</Typography>
        </Box>
        <Box mt={5} display="flex" flexDirection="row">
          <CardMedia
            component="img"
            image="https://search.pstatic.net/common/?src=https%3A%2F%2Fsearchad-phinf.pstatic.net%2FMjAxOTExMTlfNjkg%2FMDAxNTc0MTMzNDI5Mjk2.s6RTetomwzLhQDCpnLzsYyfZrZSbEc_dABAOdpzW07gg.5pItCzlCPzD7VHwVnqhc0wCSUUBGiny4s5Jw1g4RD3Ag.JPEG%2F447231-3188de59-26f1-4c35-b612-97a1eb9d772d.jpg&amp;type=w&amp;size=200"
            className={classes.media}
          />
          <Box className={classes.ratio}>
            <Typography>
              <Box fontSize={30}>매칭률 95%</Box>
            </Typography>
            <Button className={classes.goShopping}>이건 꼭 사야해!</Button>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default withStyles(styles)(ResultContainer);
