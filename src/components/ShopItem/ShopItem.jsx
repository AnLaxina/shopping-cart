import { useOutletContext } from "react-router-dom";
import styles from "./shopitem.module.css";

export default function ShopItem({ itemName }) {
  const [cartCount, setCartCount] = useOutletContext();
  function addCartCount(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const quantity = Number(formData.get("quantity"));

    setCartCount(cartCount + quantity);
  }
  return (
    <div className={styles.shopItem}>
      <img src="/vite.svg" alt="Vite icon" />
      <h3>{itemName}</h3>
      {/* Will need to make the action equal something else than # */}
      <form action="#" onSubmit={(event) => addCartCount(event)}>
        <div className={styles.quantityContainer}>
          <label htmlFor="quantity" className={styles.regularStyle}>
            Quantity{" "}
          </label>
          <label htmlFor="quantity" className={styles.mobileStyle}>
            Qty.{" "}
          </label>
          <input required type="number" name="quantity" id="quantity" min="0" />
        </div>
        <button type="submit">Add to Cart</button>
      </form>
    </div>
  );
}
