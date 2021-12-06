import { url } from "../servises/api";
import axios from "axios";

export const getRandomReceipt = async () => {
  try {
    const res = await axios.get(url);

    return res;
  } catch (error) {
    throw error;
  }
};
