import dynamic from "next/dynamic";
import styles from "./contact.module.css";
import Image from "next/image";

const contact = () => {
  // const [client, setclient] = useState(false);

  // useEffect(() => {
  //   setclient(true);
  // }, []);
  // const a = Math.random();
  // console.log(a); //HYDRATION ERROR FIX
  return (
    <div className={styles.container}>
      <div className={styles.imgcontainer}>
        <Image
          src="/contact.png"
          alt=""
          width={500}
          height={500}
          className={styles.img}
        />
      </div>
      <div className={styles.formhead}>
        <form action="" alt="" fill className={styles.form}>
          <input type="text" placeholder="Name and Surname" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number (Optional)" />
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            placeholder="Message"
          ></textarea>
          <button className={styles.button}>Send</button>
        </form>
      </div>
      {/* <h1>{client && a}</h1> HYDRATION */}
    </div>
  );
};

export default contact;
