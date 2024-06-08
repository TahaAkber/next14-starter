"use client";
import Link from "next/link";
import styles from "./link.module.css";
import Navlink from "../navlink/Navlink";
import { useState } from "react";

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
  const [openmenu, setopenmenu] = useState(false);
  const Session = true;
  const IsAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <div className={styles.links}>
          {links.map((item) => (
            <Navlink items={item} key={item.title} />
          ))}
          {Session ? (
            <>
              {IsAdmin && (
                <Navlink items={{ title: "Admin", route: "/admin" }} />
              )}
              <button className={styles.logout}>Logout</button>
            </>
          ) : (
            <Navlink items={{ title: "Login", route: "/login" }} />
          )}
        </div>
        <button
          onClick={() => setopenmenu((prev) => !prev)}
          className={styles.menubutton}
        >
          Menu
        </button>
      </div>
      {openmenu && (
        <div className={styles.mobile}>
          {links.map((item) => (
            <Navlink items={item} key={item.title} />
          ))}
          {Session ? (
            <>
              {IsAdmin && (
                <Navlink items={{ title: "Admin", route: "/admin" }} />
              )}
              <button className={styles.logout}>Logout</button>
            </>
          ) : (
            <Navlink items={{ title: "Login", route: "/login" }} />
          )}
        </div>
      )}
    </div>
  );
};

export default Links;
