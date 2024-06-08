"use client";
import Link from "next/link";
import styles from "./navlink.module.css";
import { usePathname } from "next/navigation";

const Navlink = ({ items }) => {
  const pathname = usePathname();
  return (
    <div>
      <Link
        href={items.route}
        key={items.title}
        className={`${styles.container} ${
          pathname === items.route ? styles.active : ""
        }`}
      >
        {items.title}
      </Link>
    </div>
  );
};
export default Navlink;
