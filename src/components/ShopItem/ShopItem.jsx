import { useOutletContext } from "react-router-dom";
import { useState } from "react";
import styles from "./shopitem.module.css";

export default function ShopItem({
  itemId,
  itemName,
  itemImage = "/vite.svg",
  itemDescription,
}) {
  const [cartCount, setCartCount, cartItems, setCartItems] = useOutletContext();
  const [itemCount, setItemCount] = useState(0);

  // TODO: Make it so that the itemQuantity would also be in sync with itemCount asynchronously
  // To indicate which product is what, use the id to update the quantity too
  function addCartItem(id, name, image, description, quantity) {
    setCartItems((prev) => {
      const newMap = new Map(prev);
      newMap.set(id, {
        itemName: name,
        itemImage: image,
        itemDescription: description,
        itemQuantity: itemCount,
      });

      return newMap;
    });
  }

  function submission(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const quantity = Number(formData.get("quantity"));
    setItemCount(itemCount + quantity);
    setCartCount(cartCount + quantity);

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
