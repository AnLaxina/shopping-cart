import styles from "./shopitem.module.css";

export default function ShopItem({ itemName }) {
  return (
    <div className={styles.shopItem}>
      <img src="/vite.svg" alt="Vite icon" />
      <h3>{itemName}</h3>
      {/* Will need to make the action equal something else than # */}
      <form action="#">
        <div className={styles.quantityContainer}>
          <label htmlFor="quantity">Quantity </label>
          <input type="number" id="quantity" min="0" />
        </div>
        <button type="button">Add to Cart</button>
      </form>
    </div>
  );
}
