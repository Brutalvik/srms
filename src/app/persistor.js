import { persistReducer } from "redux-persist";
import { rootReducers } from "./reducers";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

export const persistedReducer = persistReducer(persistConfig, rootReducers);
