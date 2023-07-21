'use client';

import { configureStore } from '@reduxjs/toolkit';
import oldboyReducer from './Features/OldboyBarbershop/OldBoySlice';

export const store = configureStore({
  reducer: {
    oldboy: oldboyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
