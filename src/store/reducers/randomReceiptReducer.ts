import { RANDOM_RECEIPT_TYPES } from "../actionTypes";
import { CustomAction } from "../index";

export interface RECEIPT {
  id: string;
  title: string;
  imgSrc: string;
  description: string;
}
const defaultState = {
  receipt: {
    id: "",
    title: "",
    imgSrc: "",
    description: "",
  },
};

const randomReceiptReducer = (state = defaultState, action: CustomAction) => {
  switch (action.type) {
    case RANDOM_RECEIPT_TYPES.ADD_RANDOM_RECEIPT: {
      return { ...state, receipt: action.data };
    }

    default:
      return state;
  }
};

export default randomReceiptReducer;
