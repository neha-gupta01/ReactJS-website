import axios from "axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/cartContext";

const Cart = () => {
  const {
    cartItems,
    cartItemsTotalPrice,
    showCart,
    toggleCart,
    cartItemsCount,
    handleUpdateQuantity,
  } = React.useContext(CartContext);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (showCart && !document.getElementById("cart-box").contains(e.target)) {
        toggleCart();
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [showCart, toggleCart]);

  const placeOrder = () => {
    const orderData = {
      items: Object.values(cartItems).map((item) => ({
        productId: item.id,
        quantity: item.quantity,
        price: item.price,
      })),
      totalPrice: cartItemsTotalPrice,
    };
    console.log(orderData)

    axios
      .post("http://localhost:3001/orders", orderData)
      .then((response) => {
        console.log("Order placed successfully", response.data);
      })
      .catch((error) => {
        console.log("Error placing order", error);
      });
  };
  return (
    <section className={`cart-box ${showCart ? "open" : ""}`} id="cart-box">
      <div className="container py-5">
        <div className="row mt-4 py-3">
          <div>
            <button className="btn btn-dark" onClick={toggleCart}>
              X
            </button>
          </div>
          <div className="d-flex flex-column text-center">
            <h2>CART</h2>
            <h5 className="text-secondary fw-normal py-2 fst-italic">
              {cartItemsCount} item(s) in Cart
            </h5>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="card">
            {cartItemsCount === 0 ? (
              <div className="cart-empty text-center p-5">
                <i
                  className="fa-solid fa-cart-shopping text-muted"
                  style={{ fontSize: "2rem" }}
                ></i>
                <p className="text-muted fw-bold fs-6 pt-4">
                  Your cart is empty. Add items to cart.
                </p>
                <div>
                  <Link
                    className="btn btn-primary"
                    onClick={toggleCart}
                    to="/portfolio"
                  >
                    Add
                  </Link>
                </div>
              </div>
            ) : (
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th className="text-center">Product</th>
                        <th className="text-center">Price</th>
                        <th className="text-center">Quantity</th>
                        <th className="text-center">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.values(cartItems).map((item) => (
                        <tr key={item.id}>
                          <td className="details p-4">
                            <div className="d-flex">
                              <div className="mx-2">
                                <img src={item.imageSrc} alt="portfolio-img" />
                              </div>
                              <div>
                                <p className="m-0">{item.title}</p>
                                <p className="m-0 text-muted">
                                  {item.description}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="text-center align-middle p-4">
                            ${item.price}
                          </td>
                          <td className="text-center align-middle p-4 quantity">
                            <div className="d-flex justify-content-center align-items-center">
                              <button
                                className="btn btn-sm btn-secondary"
                                onClick={() =>
                                  handleUpdateQuantity(
                                    item.id,
                                    item.quantity - 1
                                  )
                                }
                              >
                                -
                              </button>
                              <input
                                type="number"
                                className="text-center mx-2 "
                                style={{ width: "40px" }}
                                value={item.quantity}
                                readOnly
                              />
                              <button
                                className="btn btn-sm btn-secondary"
                                onClick={() =>
                                  handleUpdateQuantity(
                                    item.id,
                                    item.quantity + 1
                                  )
                                }
                              >
                                +
                              </button>
                            </div>
                          </td>
                          <td className="text-center align-middle p-4">
                            ${item.quantity * item.price}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="d-flex justify-content-end">
                  <div>
                    <p className="fw-bold">Total Price</p>
                    <p className="text-muted fw-bold text-end">
                      ${cartItemsTotalPrice}
                    </p>
                  </div>
                </div>

                <div className="d-flex justify-content-end">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={placeOrder}
                  >
                    Place order
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Cart;
