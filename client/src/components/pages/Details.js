import React from "react";
import { makeStyles, useTheme } from "@mui/styles";
import { Divider, Grid } from "@mui/material";
import {
  CommonDetailsGrid,
  CommonDetailsImage,
  CommonHeading,
} from "../common/commonDetailsGrid";
import { Container } from "@mui/system";

const useStyles = makeStyles((theme) => ({
  pageTitle: {
    fontSize: "3.5rem",
    fontFamily: "Kanit, sans-serif",
    fontWeight: "600",
    lineHeight: "100%",
    color: "#fff",
    marginBottom: "1rem",
  },
  mask: {
    width: "400px",
    height: "400px",
    borderRadius: "50%",
  },
  paraText: {
    color: "#fff",
    fontFamily: "Kanit",
    lineHeight: "130%",
    fontSize: "1.1rem",
    fontWeight: "200",
  },
  root: {
    height: "100vh",
    [theme.breakpoints.down("md")]: { height: "60vh" },
    [theme.breakpoints.down("sm")]: { height: "80vh" },
  },
}));

let details = [
  {
    id: "1",
    src: "./assets/processor.png",
    alt: "Intel i5 12600K 10 Cores (16 Threads) CPU",
    detailsText: "10 Cores (16 Threads)",
    subDetailsText: "Intel 12th gen CPU",
  },
  {
    id: "2",
    src: "./assets/gpu.png",
    alt: "EVGA NVIDIA GeForce RTX 3070 Ti GPU",
    detailsText: "RTX Ti series GPU",
    subDetailsText: " Nvidia 3070 Ti",
  },
  {
    id: "3",
    src: "./assets/ram.png",
    alt: "Corsair Vengance RGB 16GB DDR4 3600 MHz RAM",
    detailsText: "16GB DDR4 Memory",
    subDetailsText: "3600 MHz",
  },
  {
    id: "4",
    src: "./assets/cooling-fan.png",
    alt: "NZXT Kraken x53 RGB CPU Liquid Cooler",
    detailsText: "Kraken x53 RGB ",
    subDetailsText: "CPU Liquid Cooler",
  },
];

let detailsImages = [
  {
    id: "1",
    src: "./assets/details1.png",
    alt: "NZXT Kraken x53 Cooling Head",
    width: 300,
    left: "260px",
    top: "-200px",
    mdLeft: "90px",
    mdTop: "-100px",
    xsLeft: "190px",
    xsTop: "100px",
  },
  {
    id: "2",
    src: "./assets/details3.png",
    alt: "Corsair Vengance PRO RBG RAM 16GB 3600 MHz",
    width: 250,
    left: "260px",
    top: "80px",
    mdLeft: "100px",
    xsLeft: "200px",
    xsTop: "230px",
  },
  {
    id: "3",
    src: "./assets/details2.png",
    alt: "EVGA GEFORCE RTX 3070 Ti GPU",
    width: 200,
    left: "470px",
    top: "0px",
    mdLeft: "240px",
    mdTop: "30px",
    xsLeft: "310px",
    xsTop: "190px",
  },
];

export default function Details() {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div className={classes.root}>
      <Grid container spacing={0} alignItems="center">
        <Grid item xs={12} sm={6}>
          <div style={{ position: "relative" }}>
            {detailsImages.map((detailsImage) => {
              return (
                <CommonDetailsImage
                  className={classes.imageBorder}
                  key={detailsImage.id}
                  sx={{
                    position: "absolute",
                    left: detailsImage.left,
                    top: detailsImage.top,
                    width: detailsImage.width,
                    border: "3px solid",
                    borderRadius: "50%",
                    borderColor: "#ff5000",
                    [theme.breakpoints.down("lg")]: {
                      width: detailsImage.width / 1.5,
                      left: detailsImage.mdLeft,
                      top: detailsImage.mdTop
                        ? detailsImage.mdTop
                        : detailsImage.top,
                    },
                    [theme.breakpoints.down("sm")]: {
                      width: detailsImage.width / 2,
                      top: detailsImage.xsTop,
                      left: detailsImage.xsLeft,
                    },
                  }}
                  alt={detailsImage.alt}
                  src={detailsImage.src}
                ></CommonDetailsImage>
              );
            })}
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Container maxWidth="sm">
            <CommonHeading pageTitle="This is the build" />
            <Grid item xs={4} sm={2}>
              <Divider sx={{ borderBottomWidth: 7 }} color="#ff5000" />
            </Grid>
            <Grid item xs={6} sm={9}>
              <p className={classes.paraText}>
                First ones are always special, so is this rig. It was a dream
                since childhood to build my own gaming computer, and finally i
                made it happen.
              </p>
            </Grid>

            <Grid container>
              {details.map((detail) => {
                return (
                  <CommonDetailsGrid
                    key={detail.id}
                    xsValue={2}
                    smValue={2}
                    src={detail.src}
                    alt={detail.alt}
                    sx={{
                      width: 40,
                      height: 40,
                    }}
                    detailsText={detail.detailsText}
                    subDetailsText={detail.subDetailsText}
                  ></CommonDetailsGrid>
                );
              })}
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
}
