import { useOutletContext } from "react-router-dom";
import styles from "./shopitem.module.css";

export default function ShopItem({
  itemId,
  itemName,
  itemImage = "/vite.svg",
  itemDescription,
}) {
  const [cartCount, setCartCount, cartItems, setCartItems] = useOutletContext();

  function addCartItem(id, name, image, description, quantity) {
    setCartItems((prev) => {
      const newMap = new Map(prev);

      // If an item doesn't exist yet, create an empty item with quantity 0
      const existing = newMap.get(id) ?? {
        itemName: name,
        itemImage: image,
        itemDescription: description,
        itemQuantity: 0,
      };

      newMap.set(id, {
        ...existing,
        itemQuantity: quantity + existing.itemQuantity,
      });

      return newMap;
    });
  }

  function submission(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const quantity = Number(formData.get("quantity"));
    setCartCount((prev) => prev + quantity);
    addCartItem(itemId, itemName, itemImage, itemDescription, quantity);
  }

  return (
    <div className={styles.shopItem}>
      <img src={itemImage} alt="" />
      <h3>{itemName}</h3>
      {/* Will need to make the action equal something else than # */}
      <form
        action="#"
        onSubmit={(event) => {
          submission(event);
        }}
      >
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
