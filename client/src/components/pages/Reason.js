import React from "react";
import { Divider, Grid } from "@mui/material";
import { makeStyles, useTheme } from "@mui/styles";
import { CommonHeading } from "../common/commonDetailsGrid";
import { Container } from "@mui/system";
import { ReasonGrids } from "../common/reasonGrid";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const useStyles = makeStyles((theme) => ({
  reasonsContainer: {
    marginTop: "8rem",
  },
  root: {
    height: "100vh",
    [theme.breakpoints.down("md")]: { height: "80vh" },
    [theme.breakpoints.down("sm")]: { height: "100vh" },
  },
}));

let reasons = [
  {
    id: 1,
    img: "/assets/quality.png",
    title: "Quality",
    text: "With a custom-built computer, you're getting a machine specifically designed to meet your specific needs, ensuring that it will operate faster and longer than a standard computer.",
  },
  {
    id: 2,
    img: "/assets/tools.png",
    title: "Easy Fix",
    text: "You are more familiar with each component of the PC you created. Thus it is simpler to spot a problem when one occurs. Purchasing separate computer parts frequently include extra spare parts absent from pre-built machines.",
  },
  {
    id: 3,
    img: "/assets/save-money.png",
    title: "Save Money",
    text: "Building a PC will save you money in the long run because you may not need to replace or repair components as often as you would with a pre-built one.",
  },
  {
    id: 4,
    img: "/assets/work-schedule.png",
    title: "Flexibility",
    text: "Whether you wish to quadruple your memory capacity or improve graphics performance, a custom-built PC can be easily upgradeable in the future. Cheap computers have a reputation for being more challenging to upgrade and extend.",
  },
];

const Reason = () => {
  const classes = useStyles();
  const theme = useTheme();
  const sliderSettings = {
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 12000,
    initialSlide: 4,
    centerMode: true,
  };
  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Container maxWidth="lg">
          <Grid
            item
            xs={12}
            sx={{ [theme.breakpoints.up("sm")]: { textAlign: "center" } }}
          >
            <div style={{ [theme.breakpoints.up("md")]: { padding: "2rem" } }}>
              <CommonHeading pageTitle="Why build your own?"></CommonHeading>
            </div>
            <Grid item xs={4} sm={12}>
              <Divider
                sx={{
                  borderBottomWidth: 5,
                }}
                color="#ff5000"
              />
            </Grid>
          </Grid>
          <div className={classes.reasonsContainer}>
            <Slider {...sliderSettings}>
              {reasons.map((reason) => {
                return (
                  <ReasonGrids
                    key={reason.id}
                    img={reason.img}
                    title={reason.title}
                    text={reason.text}
                  ></ReasonGrids>
                );
              })}
            </Slider>
          </div>
        </Container>
      </Grid>
    </div>
  );
};

export default Reason;
