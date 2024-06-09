import styles from "./contact.module.css";
import Image from "next/image";
const contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgcontainer}>
        <Image src="/contact.png" alt="" width={300} height={300} className={styles.img} />
      </div>
      <div className={styles.formhead}>
        <form action="" alt="" fill className={styles.form}>
          <input type="text" placeholder="Name and Surname" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number (Optional)" />
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            placeholder="Message"
          ></textarea>
          <button className={styles.button}>Send</button>
        </form>
      </div>
    </div>
  );
};

export default contact;
