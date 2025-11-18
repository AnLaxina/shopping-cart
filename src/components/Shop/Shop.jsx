import styles from "./shop.module.css";
import ShopItem from "../ShopItem/ShopItem";

export default function Shop() {
  return (
    <div className={styles.shop}>
      <h2>ShopItem</h2>
      <div className={styles.shopItems}>
        <ShopItem itemName="Chicken" />
        <ShopItem itemName="かのじょ" />
        <ShopItem itemName="Burger" />
        <ShopItem itemName="Toy" />
        <ShopItem itemName="Toy" />
        <ShopItem itemName="Toy" />
        <ShopItem itemName="Toy" />
      </div>
    </div>
  );
}
