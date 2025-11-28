import { configureStore, combineReducers } from "@reduxjs/toolkit";
import toDoReducer from "../store/slices/toDoSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // localStorage for web

const rootReducer = combineReducers({
  toDo: toDoReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["toDo"], // only persist this slice
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // required for redux-persist
    }),
});

export const persistor = persistStore(store);
export default store;
