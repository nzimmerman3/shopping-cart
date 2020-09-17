import { FETCH_PRODUCTS } from "../types";
import data from "../data.json";

export const fetchProducts = () => async (dispatch) => {
  dispatch({
    type: FETCH_PRODUCTS,
    payload: data,
  });
};
