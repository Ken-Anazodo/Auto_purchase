import { configureStore } from "@reduxjs/toolkit";

import baseApi from "./baseApi";
import filterReducer from "@/services/features/slices/filterSlice";
import bulkSelectionReducer from "@/services/features/slices/bulkSelectionSlice";
import appReducer from "@/services/features/slices/appSlice";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    filter: filterReducer,
    bulkSelection: bulkSelectionReducer,
    app: appReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
