import styles from "./shop.module.css";
import ShopItem from "../ShopItem/ShopItem";

export default function Shop() {
  return (
    <div>
      <h2>ShopItem</h2>
      <div className={styles.shopItems}>
        <ShopItem itemName="Chicken" />
        <ShopItem itemName="かのじょ" />
      </div>
    </div>
  );
}
