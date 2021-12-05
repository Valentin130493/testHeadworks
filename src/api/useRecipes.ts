import { url } from "../servises/api";
import axios from "axios";

export const getRandomReceipt = async () => {
  try {
    const res = await axios.get(url).then((res) => res.data.meals[0]);
    if (res) {
      return res;
    }
  } catch (error) {
    console.log(error);
  }
};
