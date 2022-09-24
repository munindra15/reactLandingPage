import React from "react";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";

const ReasonGrids = ({ img, title, text }) => {
  return (
    <>
      <Container>
        <Grid item xs={12}>
          <Card
            sx={{
              maxWidth: 320,
              padding: 1,
              backgroundColor: "#1C1C1C",
              color: "#fff",
            }}
          >
            <CardHeader
              avatar={
                <Avatar
                  sx={{ bgcolor: "#111111", width: 90, height: 90 }}
                  alt="Quality"
                >
                  <img src={img} width={45} alt={title} />
                </Avatar>
              }
            ></CardHeader>
            <CardContent>
              <Typography
                sx={{ fontFamily: "Kanit", fontWeight: "600" }}
                variant="h4"
                component="div"
              >
                {title}
              </Typography>
              <Grid item xs={3}>
                <Divider
                  sx={{
                    borderBottomWidth: 6,
                    marginBottom: "1rem",
                    marginTop: "0.4rem",
                  }}
                  color="#ff5000"
                />
              </Grid>
              <Typography
                sx={{ fontFamily: "Kanit", fontWeight: "100" }}
                variant="body1"
              >
                {text}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Container>
    </>
  );
};

export { ReasonGrids };
