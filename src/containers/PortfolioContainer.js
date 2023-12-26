import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Portfolio from "../components/portfolio";
import Footer from "../components/footer";
import Cart from "../components/cart";

const PortfolioContainer = () => {
  const [cartItems, setCartItems] = useState({});
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [cartItemsTotalPrice, setCartItemsTotalPrice] = useState(0);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    let total = 0;
    Object.values(cartItems).map((item) => {
      total = total + item.price * item.quantity;
    });
    setCartItemsTotalPrice(total);
  }, [cartItemsCount]);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const handleAddToCart = (item) => {
    let temp = cartItems;
    if (temp[item.id]) {
      temp[item.id].quantity = temp[item.id].quantity + 1;
    } else {
      temp[item.id] = {
        ...item,
        quantity: 1,
      };
    }
    setCartItems(temp);
    setCartItemsCount((prevItems) => ++prevItems);
  };

  const handleRemoveToCart = (id) => {
    let temp = cartItems;
    if (temp[id]) {
      if (temp[id].quantity == 1) {
        delete temp[id];
      } else {
        temp[id].quantity = temp[id].quantity - 1;
      }

      setCartItems(temp);
      setCartItemsCount((prevItems) => --prevItems);
    }
  };

  return (
    <React.Fragment>
      <Navbar
        cartItems={cartItems}
        toggleCart={toggleCart}
        showCart={showCart}
        cartItemsCount={cartItemsCount}
      />
      <Cart
        isOpen={showCart}
        onClose={toggleCart}
        cartItemsTotalPrice={cartItemsTotalPrice}
        handleAddToCart={handleAddToCart}
        handleRemoveToCart={handleRemoveToCart}
      />
      <Portfolio
        showAll={true}
        cartItems={cartItems}
        handleAddToCart={handleAddToCart}
      />
      <Footer />
    </React.Fragment>
  );
};

export default PortfolioContainer;
