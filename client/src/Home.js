import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import { useDispatch, useSelector } from "react-redux";
import { calculateFinal, clear } from "./slices/counter";

// components
import Total from "./components/Total";
import People from "./components/People";
import TipPercentage from "./components/TipPercentage";
import Subtract from "./components/Subtract";
import Final from "./components/Final";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  btns: {
    //margin: theme.spacing(3, 0, 2),
    margin: theme.spacing(0.5),
  },
}));

export default function Home() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const total = useSelector((state) => state.counter.total);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <FastfoodIcon />
        </Avatar>
        <Typography component="h1" variant="h4">
          Group Pay
        </Typography>
        <div className={classes.form}>
          <Total />
          <Divider />
          <br />
          <People />
          <Divider />
          <br />
          <TipPercentage />
          <Divider />
          <br />
          <Subtract />
          <Divider />
          <br />
          <Final />
          <Divider />
          <br />
          <div style={{ display: "flex" }}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.btns}
              onClick={() => dispatch(calculateFinal())}
              disabled={total <= 0}
            >
              Calculate
            </Button>{" "}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.btns}
              onClick={() => dispatch(clear())}
            >
              Clear
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}
