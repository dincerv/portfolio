import React from "react";

const AcademicResearch = () => {
  return (
    <div id="research" className="pt-[5rem] pb-[3rem] bg-[#0b0c13]">
      <div className="text-center">
        <p className="heading__mini">Research & Publications</p>
        <h1 className="heading__primary">
          My <span className="text-yellow-300">Academic Contributions</span>
        </h1>
      </div>
      <div className="pt-[3rem] w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-[2rem]">
        {/* Research 1 */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 text-white">
          <h3 className="text-lg font-semibold mb-2">
            Climate Change&rsquo;s Impact on Food Security
          </h3>
          <p className="text-sm opacity-75 mb-4">
            Analyzed climate change&rsquo;s effects on global food security,
            focusing on agricultural productivity and socio-economic
            implications.
          </p>
          <a
            href="https://www.researchgate.net/publication/376077047_CLIMATE_CHANGE'S_IMPACT_ON_FOOD_SECURITY"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-300 underline"
          >
            Read Publication
          </a>
        </div>

        {/* Research 2 */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 text-white">
          <h3 className="text-lg font-semibold mb-2">
            Mustafa Akgül&rsquo;s Contributions to Free Software in Turkey
          </h3>
          <p className="text-sm opacity-75 mb-4">
            Researched Mustafa Akgül&rsquo;s role in advancing free software and
            internet freedom in Turkey, highlighting his pioneering efforts.
          </p>
          <a
            href="https://www.researchgate.net/publication/360757917"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-300 underline"
          >
            Read Publication
          </a>
        </div>
      </div>
    </div>
  );
};

export default AcademicResearch;
