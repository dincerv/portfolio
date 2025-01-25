import React from "react";
import Image from "next/image";

const PhotographyPortfolio = () => {
  return (
    <div id="photography" className="pt-20 pb-12 bg-black flex justify-center">
      <div className="text-center w-4/5">
        <p className="heading__mini">Photography Portfolio</p>
        <h1 className="heading__primary">
          <span className="text-yellow-300">Photography </span>
        </h1>
        <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Fotoğraf Örneği 1 */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-4 text-white">
            <div className="relative w-full h-[300px]">
              <Image
                src="/images/food.jpg"
                alt="Restaurant Menu Photography"
                fill
                className="object-cover rounded-lg object-[50%_60%]"
              />
            </div>
            <h3 className="text-lg font-semibold">
              Restaurant Menu Photography
            </h3>
          </div>

          {/* Fotoğraf Örneği 2 */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-4 text-white">
            <div className="relative w-full h-[300px]">
              <Image
                src="/images/yastik.jpg"
                alt="Luxury Pillow Product Shoot"
                fill
                className="object-cover rounded-lg object-[50%_60%]"
              />
            </div>
            <h3 className="text-lg font-semibold">
              Luxury Pillow Product Shoot
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotographyPortfolio;
