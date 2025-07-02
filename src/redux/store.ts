// src/redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import { booksApi } from "../services/booksApi"; // Import the API slice

export const store = configureStore({
  reducer: {
    [booksApi.reducerPath]: booksApi.reducer, // Add the API reducer to the store
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(booksApi.middleware), // Add RTK Query middleware
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
