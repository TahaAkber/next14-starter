import Image from "next/image";
import styles from "./dynamic.module.css";
const Page = ({}) => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Image
          src="/post.png"
          alt=""
          width={300}
          height={300}
          className={styles.image}
        />
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            src="/noavatar.png"
            alt=""
            className={styles.avatar}
            width={40}
            height={40}
          />
          <div className={styles.detailtext}>
            <span className={styles.author}>Author</span>
            <span className={styles.authorvalue}>Taha</span>
          </div>
          <div className={styles.detailtext}>
            <span className={styles.date}>Date</span>
            <span className={styles.datevalue}>01-01-2024</span>
          </div>
        </div>
        <div className={styles.contentdiv}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
          atque nemo in iusto sequi tempora ad ratione odio officia sapiente
          maxime illo voluptatem, repellat qui. Cumque quis tempore sit
          molestias, tempora nostrum! Molestiae a est vero explicabo in
          perferendis ea alias porro ratione quae? Fugiat!
        </div>
      </div>
    </div>
  );
};

export default Page;
