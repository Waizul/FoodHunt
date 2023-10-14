import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

type PayloadType = {
  item: ItemType;
  qty: number;
};

type InitialState = {
  items: CartItemType[];
  totalAmount: number;
  itemsQty: number;
  cartQty: number;
};

const initialState: InitialState = {
  items: [],
  totalAmount: 0,
  cartQty: 0,
  itemsQty: 0,
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<PayloadType>) => {
      // state.total += action.payload.item.price * action.payload.qty;
      // state.cartTotalQty += action.payload.qty;

      const existingItem = state.items.find(
        (item) => item.id === action.payload.item._id
      );
      if (existingItem) {
        console.log('Item already already added to the cart!')
      } else {
        const cartItem: CartItemType = {
          id: action.payload.item._id,
          title: action.payload.item.title,
          price: action.payload.item.price,
          imgURL: action.payload.item.imgUrl,
          qty: action.payload.qty,
        };
        state.items.push(cartItem);
      }
    },
    increase: (state, action: PayloadAction<CartItemType>) => {
      const cartItem = state.items.find((item) => item.id === action.payload.id);
      cartItem.qty += 1
    },
    descrease: (state, action: PayloadAction<CartItemType>) => {
      const cartItem = state.items.find((item) => item.id === action.payload.id);
      if(cartItem.qty > 1) cartItem.qty -= 1
    },
    
    removeFromCart: (state, action: PayloadAction<Number>) => {
      const itemId = action.payload;
      state.items = state.items.filter((item) => item.id !== itemId);
    },

    clearCart: (state) => {
      state.items = [];
    },

    calculateTotals: (state) => {
      let qty = 0;
      let totalAmount = 0;
      state.items.forEach((item) => {
        qty += item.qty;
        totalAmount += item.qty * item.price;
      });
      state.itemsQty = qty;
      state.totalAmount = totalAmount;
      state.cartQty = state.items.length;
    },
  },
});

export default CartSlice.reducer;

export const { addToCart,increase, descrease, calculateTotals, clearCart, removeFromCart } = CartSlice.actions;

// const items = (state: RootState) => state.cart.items;

// export const itemsQuantity = createSelector(items, (items) =>
//   items.reduce((acc: number, item: ItemType) => (acc += item.qty), 0)
// );
