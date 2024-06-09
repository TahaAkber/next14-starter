import Image from "next/image";
import styles from "./about.module.css";
const aboutpage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgcontainer}>
        <div className={styles.about}>
          <h1 className={styles.head}>About Us</h1>
          <p className={styles.text}>
            We create digital ideas that are bigger, bolder, braver and better
          </p>
          <p className={styles.desc}>
            We create digital ideas that are bigger, bolder, braver and better.
            We believe in good ideas flexibility and precission We’re world’s
            Our Special Team best consulting & finance solution provider. Wide
            range of web and software development services.
          </p>

          <div className={styles.boxes}>
            <div className={styles.box}>
              <h1>10 K+</h1>
              <p>Year of experience</p>
            </div>
            <div className={styles.box}>
              <h1>10 K+</h1>
              <p>Year of experience</p>
            </div>
            <div className={styles.box}>
              <h1>10 K+</h1>
              <p>Year of experience</p>
            </div>
          </div>
        </div>
        <Image
          src="/about.png"
          alt="image"
          width={500}
          height={500}
          styles={{ position: "relative" }}
        />
      </div>
    </div>
  );
};

export default aboutpage;
