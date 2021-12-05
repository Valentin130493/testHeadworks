import { RANDOM_RECEIPT_TYPES } from "../actionTypes";

export const actionGetRandomReceipt = (data: any) => {
  return {
    type: RANDOM_RECEIPT_TYPES.ADD_RANDOM_RECEIPT,
    data,
  };
};
