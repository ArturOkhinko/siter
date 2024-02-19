import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  x: 0,
  y: 0,
  opasity: 0,
  scale:0,
  blur: 0,
  speed: 0,
  delay: 0,
  functionValue: "linear",
  reply: false,
};

export const animationParametrs = createSlice({
  name: "state",
  initialState,
  reducers: {
    correctX (state, action) {
       return {
           ...state,
           x: action.payload
       } 
    },
    correctY (state, action) {
       return {
           ...state,
           y: action.payload
       } 
    },
    correctOpasity (state, action) {
       return {
           ...state,
           opasity: action.payload
       } 
    },
    correctScale (state, action) {
       return {
           ...state,
           scale: action.payload
       } 
    },
    correctBlur (state, action) {
       return {
           ...state,
           blur: action.payload
       } 
    },
    correctSpeed (state, action) {
       return {
           ...state,
           speed: action.payload
       } 
    },
    correctDelay (state, action) {
       return {
           ...state,
           delay: action.payload
       } 
    },
    correctFunctionValue (state, action) {
       return {
           ...state,
           functionValue: action.payload 
       }
    },
    correctReply (state, action) {
       return {
           ...state,
           reply: action.payload
       } 

    }
  },
});

export default animationParametrs.reducer;
export const animationParametrsAction =  animationParametrs.actions;