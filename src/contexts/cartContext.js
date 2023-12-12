import React, { createContext } from "react";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = React.useState({});
  const [cartItemsCount, setCartItemsCount] = React.useState(0);
  const [cartItemsTotalPrice, setCartItemsTotalPrice] = React.useState(0);
  const [showCart, setShowCart] = React.useState(false);

  React.useEffect(() => {
    let total = 0;
    let count = 0;
    Object.values(cartItems).map((item) => {
      total = total + item.price * item.quantity;
      count = count + item.quantity;
    });

    setCartItemsTotalPrice(total);
    setCartItemsCount(count);
  }, [cartItems]);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const handleAddToCart = (item) => {
    setCartItems((prevItems) => {
      const temp = { ...prevItems };
      if (temp[item.id]) {
        temp[item.id].quantity = temp[item.id].quantity + 1;
      } else {
        temp[item.id] = {
          ...item,
          quantity: 1,
        };
      }
      return temp;
    });
    setCartItemsCount((prevItems) => ++prevItems);
  };

  const handleUpdateQuantity = (id, newQuantity) => {
    setCartItems((prevItems) => {
      const temp = { ...prevItems };
      if (temp[id]) {
        if (newQuantity === 0) {
          delete temp[id];
        } else {
          temp[id].quantity = newQuantity;
        }
      }

      return temp;
    });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartItemsCount,
        cartItemsTotalPrice,
        showCart,
        toggleCart,
        handleAddToCart,
        handleUpdateQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
