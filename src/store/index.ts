import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import randomReceiptReducer from "./reducers/randomReceiptReducer";

const reducer = combineReducers({
  random: randomReceiptReducer,
});

export const store = createStore(reducer, composeWithDevTools());
