import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  CART_RESET,
  FAVOURITE_TO_CART,
  FAVOURITE_REMOVE_CART_ITEM,
  FAVOURITE_RESET,
  SAVE_SHIPPING_INFO,
} from "../constant/cartConstants";
import axios from "axios";

// Add to Cart
export const addItemsToCart = (id, quantity) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/vasal/oneproduct/${id}`);
  console.log(data);
  dispatch({
    type: ADD_TO_CART,
    payload: {
      product: data.sproduct._id,
      name: data.sproduct.name,
      price: data.sproduct.price,
      image: data.sproduct.images[0].url,
      stock: data.sproduct.stock,
      quantity,
    },
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

// REMOVE FROM CART
export const removeItemsFromCart = (id) => async (dispatch, getState) => {
  dispatch({
    type: REMOVE_CART_ITEM,
    payload: id,
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

// REMOVE FROM CART
export const RESETCart = () => async (dispatch) => {
  dispatch({
    type: CART_RESET,
  });

  localStorage.clear();
};
// SAVE SHIPPING INFO
export const saveShippingInfo = (data) => async (dispatch) => {
  dispatch({
    type: SAVE_SHIPPING_INFO,
    payload: data,
  });

  localStorage.setItem("shippingInfo", JSON.stringify(data));
};

// Add to Cart
export const FavouriteToCart = (id, quantity) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/vasal/oneproduct/${id}`);
  console.log(data);
  dispatch({
    type: FAVOURITE_TO_CART,
    payload: {
      product: data.sproduct._id,
      name: data.sproduct.name,
      price: data.sproduct.price,
      image: data.sproduct.images[0].url,
      stock: data.sproduct.stock,
      quantity,
    },
  });

  localStorage.setItem(
    "favouriteItems",
    JSON.stringify(getState().cart.favouriteItems)
  );
};

// REMOVE FROM CART
export const FavouriteremoveItemsFromCart =
  (id) => async (dispatch, getState) => {
    dispatch({
      type: FAVOURITE_REMOVE_CART_ITEM,
      payload: id,
    });

    localStorage.setItem(
      "favouriteItems",
      JSON.stringify(getState().cart.favouriteItems)
    );
  };

// REMOVE FROM CART
export const FavouriteRESETCart = () => async (dispatch) => {
  dispatch({
    type: FAVOURITE_RESET,
  });

  localStorage.clear();
};
