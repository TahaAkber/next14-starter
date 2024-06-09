import Postcard from "@/app/components/postcard/Postcard";
import styles from "./blog.module.css";
const blogpage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.post}>
        <Postcard />
      </div>
      <div className={styles.post}>
        <Postcard />
      </div>
      <div className={styles.post}>
        <Postcard />
      </div>
      <div className={styles.post}>
        <Postcard />
      </div>
    </div>
  );
};

export default blogpage;
