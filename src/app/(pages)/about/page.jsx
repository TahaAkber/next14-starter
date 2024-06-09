import Image from "next/image";

const aboutpage = () => {
  return (
    <div>
      <div className="imgcontainer">
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
