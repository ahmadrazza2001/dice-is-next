import React from "react";
import Links from "./links/Links";
import styles from "../../utils/scss/navbar.module.scss";
import Link from "next/link";
import { auth } from "../../lib/auth";

const Navbar = async () => {
  const session = await auth();
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Dice
      </Link>
      <div className="nav-options">
        <Links session={session} />
      </div>
    </div>
  );
};

export default Navbar;
