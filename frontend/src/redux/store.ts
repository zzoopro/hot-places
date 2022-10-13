import { combineReducers, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import postsReducer from "./reducers/postsReducer";
import popupReducer from "./reducers/pupupReducer";

export const rootReducer = combineReducers({
  popup: popupReducer,
  posts: postsReducer,
});

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(rootReducer);
export const persistor = persistStore(store);
