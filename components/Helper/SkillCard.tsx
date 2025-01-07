import React from "react";
import Image from "next/image";

interface Props {
  title: string;
  image: string;
  percent: string;
}

const SkillCard: React.FC<Props> = ({ title, image, percent }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-4 text-center w-40 h-48 mx-auto flex flex-col justify-between items-center">
      <Image
        src={image}
        alt={title}
        className="w-16 h-16 object-contain mb-2"
      />
      <h3 className="text-white text-lg font-semibold">{title}</h3>
      <div className="relative w-full bg-gray-600 h-2 rounded-full mt-2">
        <div
          className="absolute top-0 left-0 h-2 bg-yellow-400 rounded-full"
          style={{ width: percent }}
        ></div>
      </div>
      <p className="text-white text-sm mt-1">{percent}</p>
    </div>
  );
};

export default SkillCard;
