import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  value: FeatureState;
};

type FeatureState = {
  currentTheme: object | string;
};

const initialState = {
  value: {
    currentTheme: "",
  } as FeatureState,
} as InitialState;

export const feature = createSlice({
  name: "feature",
  initialState,
  reducers: {
    setTheme: (_, action: PayloadAction<object | string>) => {
      return {
        value: {
          currentTheme: action.payload,
        },
      };
    },
  },
});

export const { setTheme } = feature.actions;
export default feature.reducer;
