import React from "react";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";

const CommonImage = ({ alt, src, sx }) => {
  return <Box component="img" sx={sx} alt={alt} src={src} />;
};

const useStyles = makeStyles((theme) => ({
  detailText: {
    color: "#fff",
    fontFamily: "Kanit",
    fontWeight: "400",
    fontSize: "1.4rem",
  },
  subDetailsText: {
    color: "#fff",
    fontFamily: "Kanit",
    fontWeight: "200",
    fontSize: "1rem",
    lineHeight: "0",
  },
  alignItemsAndJustifyContent: {
    display: "flex",
    alignItems: "center",
  },
  commonHeading: {
    fontFamily: "Changa",
    lineHeight: "100%",
    color: "#fff",
    fontSize: "3.2rem",
    marginBottom: "1rem",
    letterSpacing: "0.1rem",
  },
  commonSubHeading: {
    fontFamily: "Changa",
    lineHeight: "100%",
    color: "#fff",
    marginBottom: "2rem",
    letterSpacing: "0.1rem",
    fontSize: "1.3rem",
  },
  commonParaText: {
    color: "#fff",
    fontSize: "1rem",
    fontFamily: "Kanit",
    fontWeight: 200,
    lineHeight: "125%",
    paddingLeft: 20,
  },
}));

const CommonDetailsGrid = ({
  xsValue,
  smValue,
  detailsText,
  subDetailsText,
  sx,
  alt,
  src,
}) => {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={1} sx={{ m: 0.5 }}>
        <Grid
          item
          xs={xsValue}
          sm={smValue}
          className={classes.alignItemsAndJustifyContent}
        >
          <CommonImage sx={sx} alt={alt} src={src} />
        </Grid>
        <Grid item xs={xsValue * 4} sm={smValue * 4}>
          <span className={classes.detailText}>{detailsText}</span>
          <br />
          <span className={classes.subDetailsText}>{subDetailsText}</span>
        </Grid>
      </Grid>
    </>
  );
};

const CommonDetailsImage = ({ sx, alt, src }) => {
  return (
    <>
      <CommonImage src={src} alt={alt} sx={sx} />
    </>
  );
};

const CommonHeading = ({ pageTitle }) => {
  const classes = useStyles();
  return (
    <>
      <h1 className={classes.commonHeading}>{pageTitle}</h1>
    </>
  );
};

const CommonSubHeading = ({ pageTitle }) => {
  const classes = useStyles();

  return (
    <>
      {pageTitle === `ConvictXX's Dream` ? (
        <h2 className={classes.commonSubHeading}>
          <span style={{ color: "#ff5000" }}>ConvictXX's</span> Dream
        </h2>
      ) : (
        <h2 className={classes.commonSubHeading}>{pageTitle}</h2>
      )}
    </>
  );
};

const CommonParaText = ({ text }) => {
  const classes = useStyles();
  return (
    <>
      <p className={classes.commonParaText}>{text}</p>
    </>
  );
};

const CommonImageLink = ({ src, sx, href, alt }) => {
  return (
    <>
      <a href={href} target="_blank" rel="noreferrer" style={{ margin: 15 }}>
        <Box component="img" sx={sx} alt={alt} src={src} />
      </a>
    </>
  );
};
export {
  CommonDetailsGrid,
  CommonDetailsImage,
  CommonHeading,
  CommonSubHeading,
  CommonParaText,
  CommonImageLink,
};
