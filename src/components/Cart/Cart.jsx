import styles from "./cart.module.css";

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
          <tr>
            <td>Product Name</td>
            <td>
              <img src="/vite.svg" alt="Vite logo" />
            </td>
            <td>Cool Description</td>
            <td>3</td>
          </tr>
        </tbody>
      </table>
      <p>This is the cart page!</p>
    </div>
  );
}
