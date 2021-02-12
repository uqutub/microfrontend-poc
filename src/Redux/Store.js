import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import RootReducer from "./Reducers/RootReducer";
import { createLogger } from "redux-logger";

const logger = createLogger();
const middlewares = [thunk];

if (process.env.REACT_APP_STAGE === "dev") {
  middlewares.push(logger);
}
export const ConfigureStore = () => {
  return createStore(RootReducer, applyMiddleware(...middlewares));
};