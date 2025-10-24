import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity, removeFromCart } from "../redux/cartSlice";
import Header from "../components/Header";

const CartPage = () => {
  const { items, totalQuantity, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <>
      <Header />
      <div className="cart-container">
        <h2>🛍️ Your Shopping Cart</h2>
        <p>Total items: {totalQuantity}</p>
        <p>Total cost: ${totalPrice}</p>

        {items.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          items.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.img} alt={item.name} width="80" />
              <h4>{item.name}</h4>
              <p>${item.price}</p>
              <div className="buttons">
                <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                <button onClick={() => dispatch(removeFromCart(item.id))}>Delete</button>
              </div>
            </div>
          ))
        )}
        <button className="checkout-btn">Checkout (Coming Soon)</button>
      </div>
    </>
  );
};

export default CartPage;
