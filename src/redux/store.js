import { createStore, combineReducers } from "redux";
import board from "./modules/board";

const rootReducer = combineReducers({board});

const store = createStore(rootReducer);

export default store;