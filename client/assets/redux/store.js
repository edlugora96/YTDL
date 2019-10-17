import { configureStore, getDefaultMiddleware } from "redux-starter-kit";
import rootReducers from "./rootReducers";

export const initStore = (preloadedState = {}) => {
  return configureStore({
    reducer: rootReducers,
    preloadedState,
    middleware: [...getDefaultMiddleware()]
  });
};
