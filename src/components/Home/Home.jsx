import styles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <h2>Welcome to StuffMart</h2>
      <br />
      <p>
        Your one-stop shop for... stuff! Yup.. this is all for the homepage!
      </p>
      <p>
        Also, there's no checkout page... so... add products to your heart's
        content!
      </p>
    </div>
  );
}
