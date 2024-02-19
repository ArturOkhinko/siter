import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  indicatorFunction: () => ""
};

export const indicatorFunction = createSlice({
  name: "state",
  initialState,
  reducers: {
    addIndicatorFunction (state, action) {
      console.log(action)
        state.indicatorFunction = action.payload
    }
  },
});

export default indicatorFunction.reducer;
export const indicatorFunctionActions =  indicatorFunction.actions;