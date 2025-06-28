import { configureStore } from "@reduxjs/toolkit";
import msgSlice from "./Slices/msgSlice";


const store = configureStore({
  reducer: {
    msgReducer: msgSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store; 
