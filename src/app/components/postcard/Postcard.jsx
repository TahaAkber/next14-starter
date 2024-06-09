import Link from "next/link";
import Image from "next/image";
import styles from "./postcard.module.css";
const Postcard = ({}) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgcontainer}>
          {/* <Image src= alt="" fill className={styles.img} /> */}
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>Desc</p>
        <Link href="/blog/post">READ MORE</Link>
      </div>
    </div>
  );
};

export default Postcard;
