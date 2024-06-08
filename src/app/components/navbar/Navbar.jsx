import Link from "next/link";
import Links from "../links/Links";

const Navbar = ({}) => {
  return (
    <div>
      <div>Logo</div>
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
