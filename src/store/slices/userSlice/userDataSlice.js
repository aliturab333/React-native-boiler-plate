import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userToken: "",
  userData: {},
  userDeviceToken: "",
};

export const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    userToken: (state, { payload }) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      return {
        ...state,
        userToken: payload,
      };
    },
    userData: (state, { payload }) => {
      return {
        ...state,
        userData: payload,
      };
    },
    userDeviceToken: (state, { payload }) => {
      return {
        ...state,
        userDeviceToken: payload,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { userToken, userData, userDeviceToken } = userDataSlice.actions;

export default userDataSlice.reducer;
