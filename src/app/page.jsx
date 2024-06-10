import styles from "./home.module.css";
import Image from "next/image";

const Home = () => {
  // when we get any error getting data
  // throw new Error("error in Home page");
  return (
    <div className={styles.container}>
      <div className={styles.textcontainer}>
        <h1 className={styles.heading}>Creative Thoughts Agency.</h1>
        <p className={styles.paragraph}>
          Welcome to Our World-Class Consulting and Finance Solutions At our
          core, we craft digital concepts that are bigger, bolder, braver, and
          better. We believe in innovative ideas, flexibility, and precision.
          Discover our wide range of web and software development services,
          delivered by our exceptional team. Experience the difference with the
          best consulting and finance solutions.
        </p>
        <div className={styles.parentcontainer}>
          <div className={styles.buttons}>
            <button className={styles.button}>Learn More</button>
            <button className={styles.button}>Contact</button>
          </div>
        </div>

        <div className={styles.brand}>
          <Image
            src="/brands.png"
            alt=""
            className={styles.brandsimage}
            width={500}
            height={50}
          />
        </div>
      </div>
      <div className={styles.imagecontainer}>
        <Image
          src="/hero.gif"
          alt=""
          className={styles.heroimage}
          width={450}
          height={450}
        />
      </div>
    </div>
  );
};

export default Home;
