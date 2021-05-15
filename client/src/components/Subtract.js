import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { useDispatch, useSelector } from "react-redux";
import { setSubtract } from "../slices/counter";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  input: {
    width: 42,
  },
});

export default function Subtract() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const subtract = useSelector((state) => state.counter.subtract);
  const [localSubtract, setLocalSubtract] = React.useState(subtract);

  function handleChange(e) {
    dispatch(setSubtract(Number(e.target.value)));
    setLocalSubtract(Number(e.target.value));
  }

  React.useEffect(() => {
    if (subtract === 0) {
      setLocalSubtract("");
    }
  }, [subtract]);

  return (
    <div className={classes.root}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <TextField
            id="total"
            label="Subtract"
            type="number"
            value={localSubtract}
            onChange={(e) => handleChange(e)}
            fullWidth
          />
        </Grid>
      </Grid>
    </div>
  );
}
