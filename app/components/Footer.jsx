import styles from "../../public/css/footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.company}>
        <h3>Company</h3>
        <ul>
          <li>About</li>
          <li>Careers</li>
          <li>Features</li>
          <li>Partners</li>
          <li>FAQ</li>
        </ul>
      </div>

      <div className={styles.partners}>
        <h3>Our Partners</h3>
        <ul>
          <li>Company 1</li>
          <li>Company 2</li>
          <li>Company 3</li>
        </ul>
      </div>

      <div className={styles.services}>
        <h3>Services</h3>
        <ul>
          <li>Business</li>
          <li>AI</li>
        </ul>
      </div>
    </div>
  );
}
