import React from "react";
import Links from "./links/Links";
import styles from "../../utils/scss/navbar.module.scss";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Dice
      </Link>
      <div className="nav-options">
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
