import { configureStore } from "@reduxjs/toolkit";
import dataReducer from './dataSlice';

// root
const rootReducer = {
  data: dataReducer,
}

// store
const store = configureStore({
  reducer: rootReducer,
});

export default store;