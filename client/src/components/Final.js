import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { useSelector } from "react-redux";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  input: {
    width: 42,
  },
});

export default function Final() {
  const classes = useStyles();
  const finalCost = useSelector((state) => state.counter.final);

  return (
    <div className={classes.root}>
      <Typography gutterBottom>Each person pays:</Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Typography
            id="input-slider"
            color="textSecondary"
            align="center"
            variant="h6"
            gutterBottom
          >
            {finalCost}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
