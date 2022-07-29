import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  additem: (item) => {},
  removeitem: (id) => {},
  clearCart: () => {},
});

export default CartContext;
