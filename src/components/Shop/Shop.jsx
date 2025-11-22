import styles from "./shop.module.css";
import ShopItem from "../ShopItem/ShopItem";
import { useState, useEffect } from "react";

export default function Shop() {
  const [isLoading, setIsLoading] = useState(true);
  const [shopItems, setShopItems] = useState([]);

  function assignShopItems(products) {
    const shopItems = products.map((product) => ({
      id: product.id,
      shopName: product.title,
      shopImage: product.image,
      shopDescription: product.description,
    }));
    setShopItems(shopItems);
  }

  function getAllProducts() {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        assignShopItems(data);
      })
      .finally(() => setIsLoading(false));
  }

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className={styles.shop}>
      <h2>ShopItem</h2>
      {isLoading ? (
        <p>Loading shop items...</p>
      ) : (
        <div className={styles.shopItems}>
          {shopItems.map((shopItem) => (
            <ShopItem
              key={shopItem.id}
              itemId={shopItem.id}
              itemName={shopItem.shopName}
              itemImage={shopItem.shopImage}
              itemDescription={shopItem.shopDescription}
            />
          ))}
        </div>
      )}
    </div>
  );
}
