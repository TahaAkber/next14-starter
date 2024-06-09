import Postcard from "@/app/components/postcard/Postcard";
import styles from "./blog.module.css";
const blogpage = () => {
  return (
    <div className={styles.container}>
      <Postcard />
      <Postcard />
      <Postcard />
    </div>
  );
};

export default blogpage;
