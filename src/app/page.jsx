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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, ea,
          magnam voluptatem eveniet sequi aut doloremque earum ipsam laboriosam
          dolore possimus, quam impedit dolor deleniti aliquid placeat quos quas
          assumenda! Fuga distinctio, quo expedita excepturi aut, dicta dolor et
          ab ipsum odit at recusandae nemo!
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
          width={600}
          height={600}
        />
      </div>
    </div>
  );
};

export default Home;
