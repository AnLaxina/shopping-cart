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
      <td className={styles.quantityCell}>{quantity}</td>
    </tr>
  );
}
