import { FAVOURITES_RECEIPT_TYPES } from "../actionTypes";
import { CustomAction } from "../index";

export interface Receipt {
  id?: string;
  title?: string;
  imgSrc?: string;
  description?: string;
}
const defaultState: { receipts: Receipt[] } = {
  receipts: [],
};

const favReceiptReducer = (state = defaultState, action: CustomAction) => {
  switch (action.type) {
    case FAVOURITES_RECEIPT_TYPES.ADD_TO_FAV: {
      return {
        ...state,
        receipts: state.receipts.concat(action.data),
      };
    }
    case FAVOURITES_RECEIPT_TYPES.ADD_CUSTOM: {
      return {
        ...state,
        receipts: state.receipts.concat(action.data),
      };
    }

    default:
      return state;
  }
};

export default favReceiptReducer;
