import Image from "next/image";
import styles from "../../utils/scss/postCard.module.scss";
import Link from "next/link";
const PostCard = ({ post }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        {post.img && (
          <div className={styles.imageContainer}>
            <Image src={post.img} alt="img" fill className={styles.image} />
          </div>
        )}
        <span className={styles.date}>12.2.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.description}>{post.body}</p>
        <Link className={styles.link} href={`/blog/${post.slug}`}>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
