import styles from "./cart.module.css";

import CartRow from "../CartRow/CartRow.jsx";

import { useOutletContext } from "react-router-dom";

export default function Cart() {
  const [cartCount, setCartCount, cartItems, setCartItems] = useOutletContext();

  const listOfCartItems = [];

  function setCartRows(cartItems) {
    for (const [id, cartItem] of cartItems.entries()) {
      listOfCartItems.push(
        <CartRow
          key={id}
          productName={cartItem.itemName}
          productImage={cartItem.itemImage}
          productDescription={cartItem.itemDescription}
          quantity={cartItem.itemQuantity}
        />
      );
    }
  }

  setCartRows(cartItems);
  return (
    <div className={styles.cart}>
      <h2>Your Cart</h2>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Image</th>
            <th>Description</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          <CartRow />
          {listOfCartItems}
        </tbody>
      </table>
      <p>This is the cart page!</p>
    </div>
  );
}
