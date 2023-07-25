import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

type CartItemType = {
  item: ItemType;
  qty: number;
};

type InitialState = {
  items: CartItemType[];
};

const initialState: InitialState = {
  items: [],
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItemType>) => {
      state.items.push(action.payload);
    },
  },
});

export default CartSlice.reducer;

export const { addToCart } = CartSlice.actions;

const items = (state: RootState) => state.cart.items
