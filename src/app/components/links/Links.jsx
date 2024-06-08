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

  const Session = true;
  const IsAdmin = true;
  return (
    <div className={styles.logo}>
      {links.map((item) => (
        <Navlink items={item} key={item.title} />
      ))}
      {/* Most important logic of showing admin button and login and logout links and route */}
      {Session ? (
        <>
          {IsAdmin && <Navlink items={{ title: "Admin", route: "/admin" }} />}
          <button>Logout</button>
        </>
      ) : (
        <Navlink items={{ title: "Login", route: "/login" }} />
      )}
    </div>
  );
};

export default Links;
