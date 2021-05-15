import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { useDispatch, useSelector } from "react-redux";
import { setTotal } from "../slices/counter";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  input: {
    width: 42,
  },
});

export default function Total() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const total = useSelector((state) => state.counter.total);
  const [localTotal, setLocalTotal] = React.useState(total);

  function handleChange(e) {
    dispatch(setTotal(Number(e.target.value)));
    setLocalTotal(Number(e.target.value));
  }

  React.useEffect(() => {
    if (total === 0) {
      setLocalTotal("");
    }
  }, [total]);

  return (
    <div className={classes.root}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <TextField
            id="total"
            label="Total"
            type="number"
            value={localTotal}
            onChange={(e) => handleChange(e)}
            fullWidth
          />
        </Grid>
      </Grid>
    </div>
  );
}
