import styles from "./cart.module.css";

import CartRow from "../CartRow/CartRow.jsx";

export default function Cart() {
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
        </tbody>
      </table>
      <p>This is the cart page!</p>
    </div>
  );
}
