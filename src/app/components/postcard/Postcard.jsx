import Link from "next/link";
import Image from "next/image";
import styles from "./postcard.module.css";
const Postcard = ({}) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgcontainer}>
          <Image src="/post.png" alt="" fill className={styles.img} />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          facilis unde accusamus assumenda numquam mollitia perspiciatis
          exercitationem amet eos accusantium ipsa eveniet dolore, praesentium
          cumque fuga quisquam beatae repellendus, sapiente esse temporibus est
          ea, placeat obcaecati! Soluta tempora vero, minus aliquid quibusdam
          adipisci corporis fugit?
        </p>
        <Link href="/blog/post" className={styles.link}>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default Postcard;
