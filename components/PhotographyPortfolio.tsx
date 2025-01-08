import React from "react";
import Image from "next/image";

const PhotographyPortfolio = () => {
  return (
    <div id="photography" className="pt-20 pb-12 bg-black flex justify-center">
      <div className="text-center w-4/5">
        <p className="heading__mini">Photography Portfolio</p>
        <h1 className="heading__primary">
          My <span className="text-yellow-300">Creative Work</span>
        </h1>
        <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Fotoğraf Örneği 1 */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-4 text-white">
            <div className="relative w-full h-[300px]">
              <Image
                src="https://images.unsplash.com/photo-1551218808-94e220e084d2"
                alt="Restaurant Menu Photography"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <h3 className="text-lg font-semibold">
              Restaurant Menu Photography
            </h3>
            <p className="text-sm opacity-75">
              Captured visually appealing restaurant menu images for enhanced
              marketing.
            </p>
          </div>

          {/* Fotoğraf Örneği 2 */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-4 text-white">
            <div className="relative w-full h-[300px]">
              <Image
                src="/images/yastik.jpg"
                alt="Luxury Pillow Product Shoot"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <h3 className="text-lg font-semibold">
              Luxury Pillow Product Shoot
            </h3>
            <p className="text-sm opacity-75">
              Conducted professional product photography for a renowned luxury
              brand.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotographyPortfolio;
