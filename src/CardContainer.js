import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

// const useStyles = makeStyles( theme => {
const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 250
  },
  media: {
    height: 250
  },
  actionArea: {
    width: 250,
    "&:hover": {
      //   color: "green"
      //   display: "none"
    }
  },
  textProductAdd: {
    backgroundColor: theme.palette.primary.main,
    color: "white",
    width: 10
    // width: "100%"
    // height: "100%"
  },
  hoverBox: {
    flexDirection: "row",
    position: "relative"
    // top: -40,
    // position: "absolute"
    // bottom: 200
    // top: 100
    // bottom: 0
    // bottom: 10
    // bottom: 50,
    // backgroundColor: "green",
    // bottom: 50,
    // position: "relative"
  }
}));

const CardContainer = ({ item }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea className={classes.actionArea}>
        <CardMedia
          component="img"
          className={classes.media}
          alt="product img"
          image={item.img}
          title="product img"
        />
      </CardActionArea>
      <Box className={classes.hoverBox}>
        <Button size="small" className={classes.textProductAdd}>
          싫어요
        </Button>
        <Button size="small" className={classes.textProductAdd}>
          좋아요
        </Button>
      </Box>
    </Card>
  );
};

export default CardContainer;
