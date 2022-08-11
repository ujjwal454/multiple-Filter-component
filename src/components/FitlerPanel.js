import React from "react";
import { Typography, makeStyles, Paper, Checkbox } from "@material-ui/core";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
const useStyles = makeStyles((theme) => {
  return {
    ParentPaper: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "5px",
      width: "150px",
      margin: "auto",
    },
    paperItem: {
      display: "flex",
      alignItems: "center",
    },
    filterList: {
      width: "150px",
      margin: "5px auto 5px auto",
      padding: "5px",
    },
  };
});
const FitlerPanel = ({
  brand,
  price,
  category,
  handleBrand,
  handleCategory,
  handlePrice,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Paper className={classes.ParentPaper}>
        <Typography className={classes.head} variant="h6">
          Filter
        </Typography>
        <FormatListBulletedIcon />
      </Paper>
      <Paper className={classes.filterList}>
        <Typography variant="body1">Brand</Typography>
        {brand.map((item) => {
          return (
            <div className={classes.paperItem} key={item.id}>
              <Checkbox
                checked={item.checked}
                onChange={(e) => {
                  handleBrand(e.target.checked, item.id);
                }}
              />
              <Typography varaint="body1">{item.name}</Typography>
            </div>
          );
        })}
      </Paper>
      <Paper className={classes.filterList}>
        <Typography variant="body1">Category</Typography>
        {category.map((item) => {
          return (
            <div className={classes.paperItem} key={item.id}>
              <Checkbox
                checked={item.checked}
                onChange={(e) => {
                  handleCategory(e.target.checked, item.id);
                }}
              />
              <Typography varaint="body1">{item.name}</Typography>
            </div>
          );
        })}
      </Paper>
      <Paper className={classes.filterList}>
        <Typography variant="body1">Price</Typography>
        {price.map((item) => {
          return (
            <div className={classes.paperItem} key={item.id}>
              <Checkbox
                checked={item.checked}
                onChange={(e) => {
                  handlePrice(e.target.checked, item.id);
                }}
              />
              <Typography varaint="body1">{item.name}</Typography>
            </div>
          );
        })}
      </Paper>
    </div>
  );
};

export default FitlerPanel;
