import React from "react";
import { TypeAnimation } from "react-type-animation";

const TypeWriteEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        "Frontend developer with a passion for building web applications.",
        3000, // wait 1s before replacing the text
        "Focused on creating clean and efficient code.",
        3000,
        "Enjoy solving problems and learning new technologies.",
        3000,
        "Always eager to collaborate and grow in the tech world.",
        3000,
      ]}
      wrapper="span"
      speed={50}
      className="x1:text-[50px] lg:text-[40px] sm:text-[35px] text-[25px] text-white font-bold"
      repeat={Infinity}
    />
  );
};

export default TypeWriteEffect;
