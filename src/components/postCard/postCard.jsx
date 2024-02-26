import Image from "next/image";
import styles from "../../utils/scss/postCard.module.scss";
import Link from "next/link";
const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imageContainer}>
          <Image src="/1.jpg" alt="img" fill className={styles.image} />
        </div>
        <span className={styles.date}>12.2.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.description}>
          This is the description of the card.
        </p>
        <Link className={styles.link} href="/blog/post">
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
