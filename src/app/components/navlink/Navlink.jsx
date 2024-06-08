"use client";
import Link from "next/link";
import styles from "./navlink.module.css";
import { usePathname } from "next/navigation";

const Navlink = ({ items }) => {
  if (!items) {
    console.error("Navlink component received undefined items prop");
    return null;
  }
  const { title, route } = items;
  const pathname = usePathname();
  return (
    <Link
      href={route}
      key={title}
      className={`${styles.container} ${
        pathname === route ? styles.active : ""
      }`}
    >
      {title}
    </Link>
  );
};
export default Navlink;
