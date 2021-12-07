import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import favReceiptReducer from "./reducers/favReceiptReducer";

export interface CustomAction {
  type: string;
  data: any;
}

const reducer = combineReducers({
  fav: favReceiptReducer,
});

export const store = createStore(reducer, composeWithDevTools());
