import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PortfolioContainer from "./containers/PortfolioContainer";
import MainContainer from "./containers/MainContainer";
import AboutContainer from "./containers/AboutContainer";
import CvContainer from "./containers/CvContainer";
import { CartContext } from "./contexts/cartContext";

const AppRoutes = () => {
  const [cartItems, setCartItems] = React.useState({});
  const [cartItemsCount, setCartItemsCount] = React.useState(0);
  const [cartItemsTotalPrice, setCartItemsTotalPrice] = React.useState(0);

  const [showCart, setShowCart] = React.useState(false);

  React.useEffect(() => {
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
    <CartContext.Provider
      value={{
        cartItems,
        cartItemsCount,
        cartItemsTotalPrice,
        showCart,
        toggleCart,
        handleAddToCart,
        handleRemoveToCart,
      }}
    >
      <Router>
        <Routes>
          <Route path="/portfolio" element={<PortfolioContainer />} />
          <Route path="/about" element={<AboutContainer />} />
          <Route path="/cv" element={<CvContainer />} />
          <Route path="/" element={<MainContainer />} />
        </Routes>
      </Router>
    </CartContext.Provider>
  );
};
export default AppRoutes;
