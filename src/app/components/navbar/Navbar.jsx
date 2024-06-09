import Link from "next/link";
import Links from "../links/Links";
import styles from "./navbar.module.css";
const Navbar = ({}) => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link href="/">LOGO</Link>
      </div>
      <div>
        {/* instead of writing like that we can create object link with array of links shown in links folder */}
        {/* <Link href="/">HomePage</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/blog">Blog</Link> */}
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
