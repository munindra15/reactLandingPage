import React from "react";
import { makeStyles } from "@mui/styles";
import { CssBaseline } from "@mui/material";
import Header from "./components/pages/Header";
import Details from "./components/pages/Details";
import Reason from "./components/pages/Reason";
import Footer from "./components/pages/footer";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundColor: "#121212",
  },
}));
function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <Details />
      <Reason />
      <Footer />
      {/* <footer>
        <a
          href="https://www.flaticon.com/free-icons/quality"
          title="quality icons"
        >
          Quality icons created by Freepik - Flaticon
        </a>
      </footer> */}
    </div>
  );
}

export default App;
