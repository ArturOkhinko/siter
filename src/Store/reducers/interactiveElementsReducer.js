import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  elements: []
};

export const interactiveElements = createSlice({
  name: "state",
  initialState,
  reducers: {
    addInteractiveElements (state, action) {
      state.elements = [...state.elements, ...action.payload ]
    }
  },
});

export default interactiveElements.reducer;
export const interactiveElementsActions =  interactiveElements.actions;