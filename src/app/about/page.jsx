import Image from "next/image";
import styles from "../../utils/scss/about.module.scss";

const AboutPage = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h2 className={styles.subtitle}>About Dice</h2>
          <h1 className={styles.title}>
            We create digital ideas that are bigger, bolder, braver and better.
          </h1>
          <p className={styles.description}>
            We create digital ideas that are bigger, bolder, braver and better.
            We belive in good ideas flexibility and percission. we're world's
            Our special Team best consulting & finance solution provider. Wide
            range of web and software development services.
          </p>
          <div className={styles.boxes}>
            <div className={styles.box}>
              <h1>10 +</h1>
              <p>Years of experience</p>
            </div>
            <div className={styles.box}>
              <h1>10 +</h1>
              <p>Years of experience</p>
            </div>
            <div className={styles.box}>
              <h1>10 +</h1>
              <p>Years of experience</p>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src="/about.png"
            alt="about-img"
            fill
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
