"use client";
"use modules";
import styles from "../../utils/scss/footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footerLogo}>dicetech.dev</div>
      <div className={styles.footerText}>
        &copy; 2024 Dice Technologies, All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
