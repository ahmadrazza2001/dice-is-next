"use modules";
import Image from "next/image";
import styles from "../../utils/scss/contact.module.scss";

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image className={styles.image} src="/contact.png" alt="contact" fill />
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name and Surname" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number (optional)" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Your Message"
          ></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
