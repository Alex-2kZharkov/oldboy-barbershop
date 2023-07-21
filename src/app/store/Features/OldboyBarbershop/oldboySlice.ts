'use client';

import { createSlice } from '@reduxjs/toolkit';

export interface OldboyState {
  value: string;
}

const initialState: OldboyState = {
  value: 'Hello world!',
};

export const OldBoySlice = createSlice({
  name: 'oldboyBarbershop',
  initialState,
  reducers: {
    createFunction: (state) => {
      alert(state.value);
    },
    displayFunction: (state, action) => {
      state.value = action.payload;
      alert(state.value);
    },
  },
});

export const { createFunction, displayFunction } = OldBoySlice.actions;

export default OldBoySlice.reducer;
