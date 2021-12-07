import { FAVOURITES_RECEIPT_TYPES } from "../actionTypes";
import { Receipt } from "../reducers/favReceiptReducer";

export const actionToFavReceipts = (data: Receipt) => {
  return {
    type: FAVOURITES_RECEIPT_TYPES.ADD_TO_FAV,
    data,
  };
};

export const actionAddCustomReceipt = (data: {
  title: string;
  description: string;
  imgSrc: string;
}) => {
  return {
    type: FAVOURITES_RECEIPT_TYPES.ADD_CUSTOM,
    data,
  };
};
