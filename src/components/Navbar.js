import React, { useState, useEffect } from "react";
import {
  Typography,
  AppBar,
  Toolbar,
  Container,
  makeStyles,
  InputBase,
  alpha,
} from "@material-ui/core";
import { Search } from "@material-ui/icons";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
const useStyles = makeStyles((theme) => {
  return {
    inputFields: {
      backgroundColor: "#fff",
      color: "#000",
      display: "flex",
      alignItems: "center",
    },
    textField: {
      backgroundColor: "#fff",
    },
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "auto",
      },
      [theme.breakpoints.down("xs")]: {
        width: "auto",
        marginLeft: theme.spacing(3),
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      color: "inherit",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
      [theme.breakpoints.down("xs")]: {
        width: "5ch",
      },
    },
    brand: {
      display: "flex",
      alignItems: "center",
    },
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    links: {
      display: "flex",
      alignItems: "center",
    },
    link: {
      marginRight: "10px",
    },
  };
});
const Navbar = ({ inputValue, setinputValue }) => {
  const classes = useStyles();
  const [InputValue, setInputValue] = useState("");
  useEffect(() => {
    setinputValue(InputValue);
  }, [InputValue]);
  return (
    <AppBar className={classes.AppBar}>
      <Toolbar>
        <Container className={classes.container}>
          <div className={classes.brand}>
            <Typography className={classes.brandNAme}>W2n</Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <Search />
              </div>
              <InputBase
                placeholder="Search…"
                value={InputValue}
                onChange={(e) => setInputValue(e.target.value)}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
          </div>

          <div className={classes.links}>
            <Typography variant="body1" className={classes.link}>
              Category
            </Typography>
            <NotificationsIcon className={classes.link} />
            <AccountCircleIcon className={classes.link} />
          </div>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
