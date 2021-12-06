import { FAVOURITES_RECEIPT_TYPES } from "../actionTypes";

export const actionToFavReceipts = (data: any) => {
  return {
    type: FAVOURITES_RECEIPT_TYPES.ADD_TO_FAV,
    data,
  };
};
