import styles from "../public/css/home.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.hero}>
        <h2>Connecting Brands to their Customers Through Virtual Agents</h2>

        <p>
          Proxima leverages on modern practices to not only improve interaction,
          but to also simplify and smoothen it.
        </p>

        <button>Try for free</button>
      </div>
    </div>
  );
}
