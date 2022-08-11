import React from "react";
import Navbar from "./Navbar";
import { Paper, Typography, makeStyles, Grid } from "@material-ui/core";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FilterPanel from "./FitlerPanel";
import { useState } from "react";
const useStyles = makeStyles((theme) => {
  return {
    container: {
      marginTop: "70px",
    },
    img: {
      width: "80%",
      height: "200px",
      objectFit: "cover",
      objectPosition: "center",
    },
    itemPaper: {
      textAlign: "center",
    },
    content: {
      margin: "10px auto 10px auto",
      width: "90%",
    },
    listContent: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    categoryFilter: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100px",
      margin: "10px 0px 10px auto",
      padding: "5px",
      cursor: "pointer",
    },
    filterItem: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "150px",
      margin: "10px 0px 10px auto",
      padding: "5px",
      textAlign: "center",
      cursor: "pointer",
    },
    activeItem: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "150px",
      margin: "10px 0px 10px auto",
      padding: "5px",
      textAlign: "center",
      backgroundColor: "#ddd",
      cursor: "pointer",
    },
  };
});
const Feed = ({
  data,
  category,
  Brand,
  Price,
  handleBrand,
  handleCategory,
  handlePrice,
  inputValue,
  setinputValue,
  handlePriceCategory,
  priceCategory,
}) => {
  const classes = useStyles();
  const [showCategory, setshowCategory] = useState(false);
  return (
    <div className={classes.container}>
      <Navbar inputValue={inputValue} setinputValue={setinputValue} />
      <div className={classes.main}>
        <Grid container spacing={0}>
          <Grid item md={2} sm={12}>
            <FilterPanel
              brand={Brand}
              price={Price}
              category={category}
              handleBrand={handleBrand}
              handleCategory={handleCategory}
              handlePrice={handlePrice}
            />
          </Grid>
          <Grid item md={10} className={classes.item2}>
            <Paper
              className={classes.categoryFilter}
              onClick={() => setshowCategory(!showCategory)}
            >
              Category <ExpandMoreIcon />
            </Paper>
            {showCategory &&
              priceCategory.map((item) => (
                <Paper
                  onClick={() => handlePriceCategory(item.id, item.selected)}
                  className={
                    item.selected ? classes.activeItem : classes.filterItem
                  }
                  key={item.id}
                >
                  {item.name}
                </Paper>
              ))}
            <Grid container spacing={2}>
              {data?.map((item) => (
                <Grid item md={4} key={item.id}>
                  <Paper className={classes.itemPaper}>
                    <img src={item.img} alt="" className={classes.img} />
                    <div className={classes.content}>
                      <div className={classes.listContent}>
                        <Typography variant="body1" className={classes.tag}>
                          Name:
                        </Typography>
                        <Typography variant="body1">{item.name}</Typography>
                      </div>
                      <div className={classes.listContent}>
                        <Typography variant="body1" className={classes.tag}>
                          Brand:
                        </Typography>
                        <Typography variant="body1">{item.brand}</Typography>
                      </div>
                      <div className={classes.listContent}>
                        <Typography variant="body1" className={classes.tag}>
                          Category:
                        </Typography>
                        <Typography variant="body1">{item.category}</Typography>
                      </div>
                      <div className={classes.listContent}>
                        <Typography variant="body1" className={classes.tag}>
                          Price:
                        </Typography>
                        <Typography variant="body1">${item.price}</Typography>
                      </div>
                    </div>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Feed;
