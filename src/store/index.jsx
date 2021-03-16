import { createStore, applyMiddleware, combinersReducers } from "redux";
import reducers from "./reducers";
import logger from "redux-logger";
import { composeWithdevTools } from "redux-devtools-extension/developmentOnly";
import thunkMiddleWare from "redux-thunk";

const appReducer = combinersReducers(reducers);

const middleWares = [thunkMiddleWare];
if (process.env.NODE_ENV === "developpement") {
  middleWares.push(logger);
}

export const store = createStore(
  appReducer,
  composeWithdevTools(applyMiddleware(...middleWares))
);
