import Link from "next/link";
import styles from "./link.module.css";
import Navlink from "../navlink/Navlink";
const Links = ({}) => {
  const links = [
    {
      title: "Homepage",
      route: "/",
    },
    {
      title: "Contact",
      route: "/contact",
    },
    {
      title: "About",
      route: "/about",
    },
    {
      title: "Blog",
      route: "/blog",
    },
  ];

  const session = true;
  const isAdmin = true;
  return (
    <div className={styles.logo}>
      {links.map((i) => (
        <Navlink items={i} key={i.title} />
      ))}
    </div>
  );
};

export default Links;
