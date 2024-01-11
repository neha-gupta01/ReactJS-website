import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: {},
  cartItemsCount: 0,
  cartItemsTotalPrice: 0,
  showCart: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
    addToCart(state, action) {
      const { item } = action.payload;
      state.cartItems[item.id] = {
        ...item,
        quantity: (state.cartItems[item.id]?.quantity || 0) + 1,
      };
      state.cartItemsCount = state.cartItemsCount + 1;
      state.cartItemsTotalPrice = state.cartItemsTotalPrice + item.price;
    },
    updateQuantity(state, action) {
      const { id, newQuantity } = action.payload;
      if (newQuantity === 0) {
        delete state.cartItems[id];
      } else if (state.cartItems[id]) {
        state.cartItems[id].quantity = newQuantity;
      }
      state.cartItemsCount = Object.values(state.cartItems).reduce(
        (count, item) => count + item.quantity,
        0
      );
      state.cartItemsTotalPrice = Object.values(state.cartItems).reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
  },
});

export const { toggleCart, addToCart, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;
