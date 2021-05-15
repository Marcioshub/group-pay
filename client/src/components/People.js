import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { useSelector, useDispatch } from "react-redux";
import { decrementPeople, incrementPeople } from "../slices/counter";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  input: {
    width: 42,
  },
});

export default function People() {
  const classes = useStyles();
  const people = useSelector((state) => state.counter.people);
  const dispatch = useDispatch();

  return (
    <div className={classes.root}>
      <Typography gutterBottom>People:</Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Typography
            id="input-slider"
            color="textSecondary"
            align="center"
            variant="h5"
            gutterBottom
          >
            {people}
          </Typography>
        </Grid>
      </Grid>
      <div style={{ textAlign: "center" }}>
        <IconButton
          aria-label="delete"
          onClick={() => dispatch(decrementPeople())}
          className={classes.margin}
        >
          <RemoveIcon fontSize="large" />
        </IconButton>
        <IconButton
          aria-label="delete"
          onClick={() => dispatch(incrementPeople())}
          className={classes.margin}
        >
          <AddIcon fontSize="large" />
        </IconButton>
      </div>
    </div>
  );
}
