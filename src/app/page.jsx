"use client";
"use modules";

import Image from "next/image";
import styles from "../utils/scss/home.module.scss";
export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Creative Thoughts Agency.</h1>
          <p className={styles.description}>
            We are a creative agency that specializes in creating beautiful
            websites and applicaions for our cliets.
          </p>
          <div className={styles.buttons}>
            <button className={styles.button}>Learn More</button>
            <button className={styles.button}>Contact</button>
          </div>
          <div className={styles.brands}>
            <Image
              src="/brands.png"
              alt="brands"
              fill
              className={styles.brands}
            />
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/hero.gif"
            alt="hero-img"
            fill
            className={styles.heroImg}
          />
        </div>
      </div>
    </>
  );
}
