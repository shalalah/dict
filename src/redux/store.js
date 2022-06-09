import { createStore, combineReducers, applyMiddleware } from "redux";
import { createBrowserHistory } from "history";
import board from "./modules/board";
import thunk from "redux-thunk";
// import user from "./modules/user";
export const history = createBrowserHistory();
const middlewares = [thunk];

const enhancer = applyMiddleware(...middlewares);

const rootReducer = combineReducers({board});

const store = createStore(rootReducer, enhancer);

export default store;