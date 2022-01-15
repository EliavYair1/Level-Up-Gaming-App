import {
  ADD_TO_CART,
  REMOVE_ITEM_FROM_CART,
  SUBTRACT_FROM_CART
} from "./cart.types";
// function that returns id and type ADD_TO_CART
export const addToCart = (id) => {
  return {
    type: ADD_TO_CART,
    id,
  };
};
// function that returns id and type REMOVE_ITEM_FROM_CART
export const removeItemFromCart = (id) => {
  return {
    type: REMOVE_ITEM_FROM_CART,
    id,
  };
};
// function that returns id and type SUBTRACT_FROM_CART

export const subtractFromCart = (id) => {
  return {
    type: SUBTRACT_FROM_CART,
    id,
  };
};