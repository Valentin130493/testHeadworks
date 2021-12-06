import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import randomReceiptReducer, { RECEIPT } from "./reducers/randomReceiptReducer";

export interface CustomAction {
  type: string;
  data?: any;
}

export interface ApplicationState {
  random: RECEIPT;
}

const reducer = combineReducers({
  random: randomReceiptReducer,
});

export const store = createStore(reducer, composeWithDevTools());
