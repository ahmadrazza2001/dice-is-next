"use client";
"use modules";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../../../utils/scss/navLinks.module.scss";

const SingleLink = ({ item }) => {
  const pathName = usePathname();

  return (
    <Link
      href={item.path}
      className={`${styles.navlink} ${pathName === item.path && styles.active}`}
    >
      {item.title}
    </Link>
  );
};

export default SingleLink;
