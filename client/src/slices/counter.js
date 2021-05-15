import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    total: 0,
    people: 1,
    tip: 15,
    subtract: 0,
    final: 0,
  },
  reducers: {
    setTotal: (state, action) => {
      state.total = action.payload;
    },
    setTip: (state, action) => {
      state.tip = action.payload;
    },
    setSubtract: (state, action) => {
      state.subtract = action.payload;
    },
    incrementPeople: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      if (state.people < 25) state.people += 1;
    },
    decrementPeople: (state) => {
      if (state.people > 1) state.people -= 1;
    },
    calculateFinal: (state) => {
      if (state.total < 1 || state.people < 1) {
        return;
      }

      state.final = (
        (state.total - state.subtract + state.total * (state.tip / 100)) /
        state.people
      ).toFixed(2);
    },
    clear: (state) => {
      state.total = 0;
      state.people = 1;
      state.tip = 15;
      state.subtract = 0;
      state.final = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setTotal,
  setTip,
  setSubtract,
  incrementPeople,
  decrementPeople,
  calculateFinal,
  clear,
} = counterSlice.actions;

export default counterSlice.reducer;
