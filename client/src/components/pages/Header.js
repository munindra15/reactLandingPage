import React from "react";
import { makeStyles } from "@mui/styles";
import { AppBar, Toolbar, Button, Divider, Grid } from "@mui/material";
import { Container } from "@mui/system";

const useStyles = makeStyles((theme) => ({
  appbar: {
    background: "none !important",
    fontFamily: "Changa One, cursive",
    letterSpacing: "1px",
  },
  appbarTitle: {
    fontFamily: "Changa",
  },
  appbarWrapper: {
    width: "auto",
    margin: "0 auto",
  },
  colorText: {
    color: "#ff5000",
  },
  headerText: {
    fontSize: "3rem",
    fontFamily: "Kanit",
    fontWeight: "bold",
    lineHeight: "100%",
    color: "#fff",
  },
  paraTextWrapper: {
    fontFamily: "Kanit",
    color: "#fff",
    fontWeight: "lighter",
    fontSize: "0.85rem",
  },
  paraText: {
    color: "#ff5000",
    fontStyle: "italic",
  },
  heroImage: {
    transform: "rotate(1.31deg)",
    width: "50%",
    [theme.breakpoints.down("md")]: { width: "80%" },
    [theme.breakpoints.down("sm")]: { width: "50%" },
  },
  root: {
    height: "100vh",
    [theme.breakpoints.down("md")]: { height: "60vh" },
    [theme.breakpoints.down("sm")]: { height: "100vh" },
  },
}));
export default function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={8} alignItems="center" justifyContent="center">
        <Grid item xs={12}>
          <AppBar className={classes.appbar} elevation={0} position="relative">
            <Toolbar className={classes.appbarWrapper}>
              <h1 className={classes.appbarTitle}>
                <span className={classes.colorText}>ConvictXX's</span> Dream
              </h1>
            </Toolbar>
          </AppBar>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Container maxWidth="xs">
            <Grid item xs={2}>
              <Divider sx={{ borderBottomWidth: 7 }} color="#ff5000" />
            </Grid>
            <h1 className={classes.headerText}>The Ultimate Gaming Machine</h1>
            <p className={classes.paraTextWrapper}>
              This is what you need for the ultimate mid-range gaming
              experience. Built after hours of research and benchmark testing by
              <span className={classes.paraText}> ConvictXX </span> himself.
            </p>
            <Grid item xs={2}>
              <Divider sx={{ borderBottomWidth: 7 }} color="#ff5000" />
            </Grid>
            <Button
              sx={{
                fontFamily: "Kanit",
                fontWeight: "bold",
                fontSize: 22,
                padding: "2% 8%",
                marginTop: 5,
                marginLeft: 1,
                textTransform: "none",
              }}
              variant="contained"
              href="https://ca.pcpartpicker.com/b/dLDcCJ"
              size="large"
              target="_blank"
              rel="noreferrer"
            >
              Buy it from here
            </Button>
          </Container>
        </Grid>
        <Grid item xs={12} sm={6}>
          <img
            src={"./assets/banner.png"}
            alt="NZXT H510Flow"
            className={classes.heroImage}
          />
        </Grid>
      </Grid>
    </div>
  );
}
