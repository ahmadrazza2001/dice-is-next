"use client";
"use modules";
import React, { useState } from "react";
// import "../../../utils/scss/navLinks.scss";
import NavLink from "./NavLink";
import styles from "../../../utils/scss/links.module.scss";

const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blogs",
    path: "/blogs",
  },
];

const Links = () => {
  const [open, setOpen] = useState(false);

  //temporary
  const session = true;
  const admin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        {session ? (
          <>
            {admin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            <button className={styles.logoutBtn}>Logout</button>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>
      <button
        className={styles.menuBtn}
        onClick={() => setOpen((prev) => !prev)}
      >
        Menu
      </button>
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
