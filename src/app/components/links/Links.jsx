import Link from "next/link";

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
  return (
    <div>
      {links.map((i) => (
        <div>
          <Link href={i.route} key={i.title}>
            {i.title}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Links;
