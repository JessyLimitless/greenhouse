// src/components/Cart.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, deleteItem } from '../redux/cartSlice';

const Cart = () => {
  // Redux 상태에서 cart 상태를 가져옵니다.
  const cart = useSelector((state) => state.cart) || { items: [], totalQuantity: 0, totalAmount: 0 };
  const dispatch = useDispatch();

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <p>Total Items: {cart.totalQuantity}</p>
      <p>Total Amount: ${cart.totalAmount.toFixed(2)}</p>
      <ul>
        {Array.isArray(cart.items) && cart.items.map((item) => (
          <li key={item.id}>
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => dispatch(addItem(item))}>+</button>
            <button onClick={() => dispatch(removeItem(item.id))}>-</button>
            <button onClick={() => dispatch(deleteItem(item.id))}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={() => alert("Checkout Coming Soon!")}>Checkout</button>
    </div>
  );
};

export default Cart;
