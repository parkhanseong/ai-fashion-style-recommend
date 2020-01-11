import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 250
  },
  media: {
    height: 250
  },
  actionArea: {
    width: 250
  },
  contentArea: {
    height: 100
  },
  buttonProductAdd: {
    justifyContent: "center",
    margin: 0,
    bottom: 50,
    position: "relative"
  },
  textProductAdd: {
    // backgroundColor: theme.palette.primary.main,
    // color: "white",
    color: "lightgray",
    width: 10
  },
  hoverBox: {
    marginRight: 30,
    marginLeft: 30,
    marginTop: 10,
    marginBottom: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  }
}));

const ProductItemGrid = ({ itemList, onClickAddProduct }) => {
  const classes = useStyles();

  itemList = [
    {
      img:
        "https://search.pstatic.net/common/?src=https%3A%2F%2Fsearchad-phinf.pstatic.net%2FMjAxOTExMTlfNjkg%2FMDAxNTc0MTMzNDI5Mjk2.s6RTetomwzLhQDCpnLzsYyfZrZSbEc_dABAOdpzW07gg.5pItCzlCPzD7VHwVnqhc0wCSUUBGiny4s5Jw1g4RD3Ag.JPEG%2F447231-3188de59-26f1-4c35-b612-97a1eb9d772d.jpg&amp;type=w&amp;size=200"
    },
    {
      img:
        "https://search.pstatic.net/common/?src=https%3A%2F%2Fsearchad-phinf.pstatic.net%2FMjAxOTExMTlfNjkg%2FMDAxNTc0MTMzNDI5Mjk2.s6RTetomwzLhQDCpnLzsYyfZrZSbEc_dABAOdpzW07gg.5pItCzlCPzD7VHwVnqhc0wCSUUBGiny4s5Jw1g4RD3Ag.JPEG%2F447231-3188de59-26f1-4c35-b612-97a1eb9d772d.jpg&amp;type=w&amp;size=200"
    },
    {
      img:
        "https://search.pstatic.net/common/?src=https%3A%2F%2Fsearchad-phinf.pstatic.net%2FMjAxOTExMTlfNjkg%2FMDAxNTc0MTMzNDI5Mjk2.s6RTetomwzLhQDCpnLzsYyfZrZSbEc_dABAOdpzW07gg.5pItCzlCPzD7VHwVnqhc0wCSUUBGiny4s5Jw1g4RD3Ag.JPEG%2F447231-3188de59-26f1-4c35-b612-97a1eb9d772d.jpg&amp;type=w&amp;size=200"
    },
    {
      img:
        "https://search.pstatic.net/common/?src=https%3A%2F%2Fsearchad-phinf.pstatic.net%2FMjAxOTExMTlfNjkg%2FMDAxNTc0MTMzNDI5Mjk2.s6RTetomwzLhQDCpnLzsYyfZrZSbEc_dABAOdpzW07gg.5pItCzlCPzD7VHwVnqhc0wCSUUBGiny4s5Jw1g4RD3Ag.JPEG%2F447231-3188de59-26f1-4c35-b612-97a1eb9d772d.jpg&amp;type=w&amp;size=200"
    },
    {
      img:
        "https://search.pstatic.net/common/?src=https%3A%2F%2Fsearchad-phinf.pstatic.net%2FMjAxOTExMTlfNjkg%2FMDAxNTc0MTMzNDI5Mjk2.s6RTetomwzLhQDCpnLzsYyfZrZSbEc_dABAOdpzW07gg.5pItCzlCPzD7VHwVnqhc0wCSUUBGiny4s5Jw1g4RD3Ag.JPEG%2F447231-3188de59-26f1-4c35-b612-97a1eb9d772d.jpg&amp;type=w&amp;size=200"
    },
    {
      img:
        "https://search.pstatic.net/common/?src=https%3A%2F%2Fsearchad-phinf.pstatic.net%2FMjAxOTExMTlfNjkg%2FMDAxNTc0MTMzNDI5Mjk2.s6RTetomwzLhQDCpnLzsYyfZrZSbEc_dABAOdpzW07gg.5pItCzlCPzD7VHwVnqhc0wCSUUBGiny4s5Jw1g4RD3Ag.JPEG%2F447231-3188de59-26f1-4c35-b612-97a1eb9d772d.jpg&amp;type=w&amp;size=200"
    },
    {
      img:
        "https://search.pstatic.net/common/?src=https%3A%2F%2Fsearchad-phinf.pstatic.net%2FMjAxOTExMTlfNjkg%2FMDAxNTc0MTMzNDI5Mjk2.s6RTetomwzLhQDCpnLzsYyfZrZSbEc_dABAOdpzW07gg.5pItCzlCPzD7VHwVnqhc0wCSUUBGiny4s5Jw1g4RD3Ag.JPEG%2F447231-3188de59-26f1-4c35-b612-97a1eb9d772d.jpg&amp;type=w&amp;size=200"
    },
    {
      img:
        "https://search.pstatic.net/common/?src=https%3A%2F%2Fsearchad-phinf.pstatic.net%2FMjAxOTExMTlfNjkg%2FMDAxNTc0MTMzNDI5Mjk2.s6RTetomwzLhQDCpnLzsYyfZrZSbEc_dABAOdpzW07gg.5pItCzlCPzD7VHwVnqhc0wCSUUBGiny4s5Jw1g4RD3Ag.JPEG%2F447231-3188de59-26f1-4c35-b612-97a1eb9d772d.jpg&amp;type=w&amp;size=200"
    },
    {
      img:
        "https://search.pstatic.net/common/?src=https%3A%2F%2Fsearchad-phinf.pstatic.net%2FMjAxOTExMTlfNjkg%2FMDAxNTc0MTMzNDI5Mjk2.s6RTetomwzLhQDCpnLzsYyfZrZSbEc_dABAOdpzW07gg.5pItCzlCPzD7VHwVnqhc0wCSUUBGiny4s5Jw1g4RD3Ag.JPEG%2F447231-3188de59-26f1-4c35-b612-97a1eb9d772d.jpg&amp;type=w&amp;size=200"
    },
    {
      img:
        "https://search.pstatic.net/common/?src=https%3A%2F%2Fsearchad-phinf.pstatic.net%2FMjAxOTExMTlfNjkg%2FMDAxNTc0MTMzNDI5Mjk2.s6RTetomwzLhQDCpnLzsYyfZrZSbEc_dABAOdpzW07gg.5pItCzlCPzD7VHwVnqhc0wCSUUBGiny4s5Jw1g4RD3Ag.JPEG%2F447231-3188de59-26f1-4c35-b612-97a1eb9d772d.jpg&amp;type=w&amp;size=200"
    },
    {
      img:
        "https://search.pstatic.net/common/?src=https%3A%2F%2Fsearchad-phinf.pstatic.net%2FMjAxOTExMTlfNjkg%2FMDAxNTc0MTMzNDI5Mjk2.s6RTetomwzLhQDCpnLzsYyfZrZSbEc_dABAOdpzW07gg.5pItCzlCPzD7VHwVnqhc0wCSUUBGiny4s5Jw1g4RD3Ag.JPEG%2F447231-3188de59-26f1-4c35-b612-97a1eb9d772d.jpg&amp;type=w&amp;size=200"
    },
    {
      img:
        "https://search.pstatic.net/common/?src=https%3A%2F%2Fsearchad-phinf.pstatic.net%2FMjAxOTExMTlfNjkg%2FMDAxNTc0MTMzNDI5Mjk2.s6RTetomwzLhQDCpnLzsYyfZrZSbEc_dABAOdpzW07gg.5pItCzlCPzD7VHwVnqhc0wCSUUBGiny4s5Jw1g4RD3Ag.JPEG%2F447231-3188de59-26f1-4c35-b612-97a1eb9d772d.jpg&amp;type=w&amp;size=200"
    }
  ];

  return (
    <div>
      <Grid container spacing={3}>
        {itemList.map(item => (
          <Grid item key={item.title}>
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
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProductItemGrid;
