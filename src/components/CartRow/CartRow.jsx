import styles from "./cartrow.module.css";

export default function CartRow({
  productName = "Product Name",
  productImage = "/vite.svg",
  productDescription = "Product Description",
  quantity = 1,
}) {
  return (
    <tr>
      <td>{productName}</td>
      <td>
        <img src={productImage} alt="" />
      </td>
      <td>{productDescription}</td>
      <td className={styles.quantityCell}>
        <div className={styles.quantityContainer}>
          <p>{quantity}</p>
          <div className={styles.quantityIcons}>
            <button type="button" className={styles.quantityIcon}>
              <img src="./edit.png" alt="Edit quantity" />
            </button>
            <button type="button" className={styles.quantityIcon}>
              <img src="./delete.png" alt="Delete item" />
            </button>
          </div>
        </div>
      </td>
    </tr>
  );
}
