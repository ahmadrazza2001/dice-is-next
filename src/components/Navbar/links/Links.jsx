"use client";
"use modules";
import React, { useState } from "react";
// import "../../../utils/scss/navLinks.scss";
import SingleLink from "./singleLink";
import styles from "../../../utils/scss/navLinks.module.scss";

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
          <SingleLink item={link} key={link.title} />
        ))}
        {session ? (
          <>
            {admin && <SingleLink item={{ title: "Admin", path: "/admin" }} />}
            <button className="logoutBtn">Logout</button>
          </>
        ) : (
          <SingleLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>
      <button onClick={() => setOpen((prev) => !prev)}>Menu</button>
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <SingleLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
