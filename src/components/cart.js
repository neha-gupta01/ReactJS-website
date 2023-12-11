import React from "react";

const Cart = ({
  isOpen,
  onClose,
  cartItems,
  cartItemsTotalPrice,
  handleRemoveToCart,
  handleAddToCart,
}) => {
  // const [cartItems, setCartItems] = useState([]);

  // const addToCart = (item) => {
  //   const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

  //   if (existingItem) {
  //     setCartItems((prevCartItems) =>
  //       prevCartItems.map((cartItem) =>
  //         cartItem.id === item.id
  //           ? { ...cartItem, quantity: cartItem.quantity + 1 }
  //           : cartItem
  //       )
  //     );
  //   } else {
  //     setCartItems((prevCartItems) => [
  //       ...prevCartItems,
  //       { ...item, quantity: 1 },
  //     ]);
  //   }
  // };

  // const itemQuantity = (itemId, newQuantity) => {
  //   setCartItems((prevCartItems) =>
  //     prevCartItems.map((item) =>
  //       item.id === itemId ? { ...item, quantity: newQuantity } : item
  //     )
  //   );
  // };

  // const removeFromCart = (itemId) => {
  //   setCartItems((prevCartItems) =>
  //     prevCartItems.filter((cartItem) => cartItem.id !== itemId)
  //   );
  // };

  // const calculateTotalPrice = () => {
  //   return cartItems.reduce(
  //     (total, cartItem) => total + cartItem.price * cartItem.quantity
  //   );
  // }

  return (
    <section className={`cart-box ${isOpen ? "open" : ""}`} id="cart">
      <div className="container py-5">
        <div className="row mt-4 py-3">
          <div>
            <button className="btn btn-dark" onClick={onClose}>
              X
            </button>
          </div>
          <div className="col-12 d-flex flex-column text-center">
            <h2>CART</h2>
            <h5 className="text-secondary fw-normal py-2 fst-italic">
              0 item(s) in Cart
            </h5>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="card w-75">
            <div className="card-header">
              <h2>Shopping Cart</h2>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th className="text-center">Product</th>
                      <th className="text-center">Price</th>
                      <th className="text-center">Quantity</th>
                      <th className="text-center">Total</th>
                      <th className="text-center"></th>
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
                          <input
                            type="number"
                            className="text-center "
                            style={{ width: "50px" }}
                            value={item.quantity}
                            readOnly
                          />
                        </td>
                        <td className="text-center align-middle p-4">
                          ${item.quantity * item.price}
                        </td>
                        <td className="text-center align-middle m-0">
                          <button
                            className="btn btn-danger"
                            onClick={() => handleRemoveToCart(item.id)}
                          >
                            <i className="fa-solid fa-trash"></i>
                          </button>
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

              <div className="d-flex justify-content-end m-0">
                <button type="button" className="btn btn-primary m-2">
                  Place order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Cart;
