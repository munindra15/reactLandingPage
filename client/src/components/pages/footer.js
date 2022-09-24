import React from "react";
import { useTheme } from "@mui/styles";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import {
  CommonImageLink,
  CommonSubHeading,
  CommonParaText,
} from "../common/commonDetailsGrid";

const techStack = [
  {
    id: 1,
    href: "https://reactjs.org/",
    src: "/assets/react.png",
    alt: "React",
    sx: { width: 50 },
  },
  {
    id: 2,
    href: "https://mui.com/",
    src: "/assets/material-ui.png",
    alt: "Material-Ui",
    sx: { width: 50 },
  },
  {
    id: 3,
    href: "https://www.flaticon.com/free-icons/atom",
    src: "/assets/flaticon.png",
    alt: "Flaticons",
    sx: { width: 50 },
  },
];

export default function Footer() {
  const theme = useTheme();
  return (
    <>
      <div
        style={{
          color: "#fff",
          background:
            "linear-gradient(180deg, #121212 16.15%, #993000 100%), #121212",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={11}>
            <Grid item xs={12} sm={6}>
              <CommonSubHeading
                pageTitle={"ConvictXX's Dream"}
              ></CommonSubHeading>
              <Grid item xs={8}>
                <CommonParaText
                  text={
                    "The dream of an ambitious little kid turned into reality. I have wanted to build my custom pc since school. It’s tough for a middle-class boy even to lay the idea before his parents. Ultimately, I made it happen once I was capable enough to start fulfilling my bucket list."
                  }
                ></CommonParaText>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              sx={{
                textAlign: "left",
                [theme.breakpoints.up("md")]: { textAlign: "right" },
              }}
            >
              <CommonSubHeading
                pageTitle={"Landing page made with:"}
              ></CommonSubHeading>
              {techStack.map((tech) => {
                return (
                  <CommonImageLink
                    key={tech.id}
                    src={tech.src}
                    href={tech.href}
                    alt={tech.alt}
                    sx={tech.sx}
                  ></CommonImageLink>
                );
              })}
            </Grid>
            <Grid item xs={12} textAlign="center" style={{ marginBottom: 10 }}>
              <span>
                © Designed & Developed by{" "}
                <a
                  href="https://www.munindrasoni.com"
                  rel="noreferrer"
                  target="_blank"
                >
                  {" "}
                  Munindra ZInzuvadia{" "}
                </a>{" "}
                <small>(Breckenridge Solutions)</small>
              </span>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}
