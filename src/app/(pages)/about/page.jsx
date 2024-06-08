import Image from "next/image";
import "./about.css";

const aboutpage = () => {
  return (
    <div>
      <div className="imgcontainer">
        <Image src="/about.png" alt="image" />
      </div>
    </div>
  );
};

export default aboutpage;
