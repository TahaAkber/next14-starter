import Postcard from "@/app/components/postcard/Postcard";
import styles from "./blog.module.css";
const getdata = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return res.json();
};
const blogpage = async () => {
  const post = await getdata();
  return (
    <div className={styles.container}>
      {post.map((post) => (
        <div className={styles.post} key={post.Id}>
          <Postcard post={post} />
        </div>
      ))}
    </div>
  );
};

export default blogpage;
