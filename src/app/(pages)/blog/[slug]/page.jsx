import Image from "next/image";
import styles from "./dynamic.module.css";
const getdata = async (slug) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return res.json();
};
const getuser = async (slug) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${slug}`);
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return res.json();
};
const Page = async ({ params }) => {
  const { slug } = params;
  console.log(params);

  const post = await getdata(slug);
  const user = await getuser(slug);
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Image
          src="/post.png"
          alt=""
          width={300}
          height={350}
          className={styles.image}
        />
      </div>

      <div className={styles.right}>
        <h1 className={styles.title}>{post.title}</h1>
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
            <span className={styles.authorvalue}>{user.name}</span>
          </div>
          <div className={styles.detailtext}>
            <span className={styles.date}>Date</span>
            <span className={styles.datevalue}>01-01-2024</span>
          </div>
        </div>
        <div className={styles.contentdiv}>{post.body}</div>
      </div>
    </div>
  );
};

export default Page;
