import { combineReducers, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import loadingReducer from "./reducers/loadingReducer";
import popupReducer from "./reducers/pupupReducer";

export const rootReducer = combineReducers({
  popup: popupReducer,
  loading: loadingReducer
});

const persistConfig = {
  key: "root",
  storage,
};
export const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
