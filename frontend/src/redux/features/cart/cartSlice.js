import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const isExisting = state.cartItems.find(
        (item) => item._id === action.payload._id
      );
      if (!isExisting) {
        state.cartItems.push(action.payload);
        toast.success("Item added to cart");
      } else {
        toast.info("Item already in cart");
      }
    },
  },
});

// export the actions
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
