import { FAVOURITES_RECEIPT_TYPES } from "../actionTypes";
import { CustomAction } from "../index";

export interface RECEIPT {
  id: string;
  title: string;
  imgSrc: string;
  description: string;
}
const defaultState = {
  receipts: [
    {
      id: "",
      title: "",
      imgSrc: "",
      description: "",
    },
  ],
};

const favReceiptReducer = (state = defaultState, action: CustomAction) => {
  switch (action.type) {
    case FAVOURITES_RECEIPT_TYPES.ADD_TO_FAV: {
      return {
        ...state,
        receipts:
          state.receipts[0].id === ""
            ? state.receipts.splice(0, 1, action.data)
            : state.receipts.concat(action.data),
      };
    }

    default:
      return state;
  }
};

export default favReceiptReducer;
