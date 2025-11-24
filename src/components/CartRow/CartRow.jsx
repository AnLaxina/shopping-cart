import styles from "./cartrow.module.css";

import { useState } from "react";
import { useOutletContext } from "react-router-dom";

export default function CartRow({
  productId = -1,
  productName = "Product Name",
  productImage = "/vite.svg",
  productDescription = "Product Description",
  quantity = 1,
}) {
  const [cartCount, setCartCount, cartItems, setCartItems] = useOutletContext();

  const [shouldEdit, setShouldEdit] = useState(false);

  function editForm() {
    setShouldEdit(!shouldEdit);
  }

  function updateCart(newQuantity) {
    if (newQuantity > quantity) {
      const newOne = newQuantity - quantity;
      setCartCount((currentCartCount) => currentCartCount + newOne);
    } else {
      const newOne = quantity - newQuantity;
      setCartCount((currentCartCount) => currentCartCount - newOne);
    }
  }

  function deleteCartItem() {
    const currentItemQuantity = cartItems.get(productId).itemQuantity;
    setCartCount((currentCartCount) => currentCartCount - currentItemQuantity);
    setCartItems((prev) => {
      const clonedMap = new Map(prev);
      clonedMap.delete(productId);
      return clonedMap;
    });
  }

  function finalizeEdit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const quantity = Number(formData.get("newCartAmount"));

    setCartItems((currentCartItems) => {
      const newItems = new Map(currentCartItems);
      const currentItem = newItems.get(productId);

      newItems.set(productId, {
        ...currentItem,
        itemQuantity: quantity,
      });

      return newItems;
    });

    updateCart(quantity);
    editForm();
  }
  return (
    <tr>
      <td>{productName}</td>
      <td>
        <img src={productImage} alt="" />
      </td>
      <td>{productDescription}</td>
      <td className={styles.quantityCell}>
        <div className={styles.quantityContainer}>
          {shouldEdit ? (
            <form
              action="#"
              onSubmit={(event) => {
                finalizeEdit(event);
              }}
            >
              <input
                type="number"
                name="newCartAmount"
                defaultValue={cartItems.get(productId).itemQuantity}
                min="0"
                max="1000"
                placeholder="Edit amount"
              />
              <button type="submit">Submit</button>
            </form>
          ) : (
            <>
              <p>{quantity}</p>
              <div className={styles.quantityIcons}>
                <button
                  type="button"
                  className={styles.quantityIcon}
                  onClick={editForm}
                >
                  <img src="./edit.png" alt="Edit quantity" />
                </button>
                <button
                  type="button"
                  className={styles.quantityIcon}
                  onClick={deleteCartItem}
                >
                  <img src="./delete.png" alt="Delete item" />
                </button>
              </div>
            </>
          )}
        </div>
      </td>
    </tr>
  );
}
