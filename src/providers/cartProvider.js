import React, { useContext, useReducer } from "react";

const CartContext = React.createContext();
const CartContextDispatcher = React.createContext();

const intialState = {
  cart: [],
  total: 0,
};
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const updatedCart = [...state.cart];
      const updatedItemIndex = updatedCart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (updatedItemIndex < 0) {
        updatedCart.push({ ...action.payload, quantity: 1 });
      } else {
        const updatedItem = { ...updatedCart[updatedItemIndex] };
        updatedItem.quantity++;
        updatedCart[updatedItemIndex] = updatedItem;
      }
      return { ...state, cart: updatedCart };
    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, intialState);
  return (
    <CartContext.Provider value={cart}>
      <CartContextDispatcher.Provider value={dispatch}>
        {children}
      </CartContextDispatcher.Provider>
    </CartContext.Provider>
  );
};

export default CartProvider;

//custom hook
export const useCart = () => useContext(CartContext);
export const useCartActions = () => useContext(CartContextDispatcher);
