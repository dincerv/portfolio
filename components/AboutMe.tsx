import { CheckIcon } from "@heroicons/react/16/solid";
import React from "react";

const AboutMe = () => {
  return (
    <div id="about" className="mt-[-3rem] bg-black pb-[3rem]">
      <div className="w-[80%] pt-[5rem] sm:pt-[7rem] md:pt-[10rem] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-[2rem]">
        <div>
          <p className="heading__mini">About Me</p>
          <h1 className="heading__primary">
            Experienced <span className="text-yellow-400">Web Developer</span>{" "}
            focused on innovative solutions
          </h1>
          <p className="text-[15px] mt-[1.3rem] text-white opacity-75">
            With over 3 years of experience in web development, I have built a
            diverse range of projects that span across different industries.
            From frontend development to full-stack applications, I combine my
            technical skills with a user-centered approach to create intuitive
            digital experiences. I am excited to continue pushing the boundaries
            of technology and improving my craft.
          </p>

          <div className="mt-[2rem] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-[2rem]">
            {/* Left Column */}
            <div
              data-aos="zoom-in"
              data-aos-anchor-placement="top-center"
              data-aos-delay="200"
              className="space-y-4"
            >
              <div
                data-aos="zoom-in"
                data-aos-anchor-placement="top-center"
                data-aos-delay="300"
                className="flex items-center space-x-4"
              >
                <CheckIcon className="w-[2rem] h-[2rem] text-yellow-400" />
                <p className="text-[18px] text-white">Frontend Development</p>
              </div>
              <div
                data-aos="zoom-in"
                data-aos-anchor-placement="top-center"
                data-aos-delay="400"
                className="flex items-center space-x-4"
              >
                <CheckIcon className="w-[2rem] h-[2rem] text-yellow-400" />
                <p className="text-[18px] text-white">Project Management</p>
              </div>
              <div
                data-aos="zoom-in"
                data-aos-anchor-placement="top-center"
                data-aos-delay="500"
                className="flex items-center space-x-4"
              >
                <CheckIcon className="w-[2rem] h-[2rem] text-yellow-400" />
                <p className="text-[18px] text-white">Web Development</p>
              </div>
            </div>
            {/* Right Column */}
            <div
              data-aos="zoom-in"
              data-aos-anchor-placement="top-center"
              data-aos-delay="200"
              className="space-y-4"
            >
              <div
                data-aos="zoom-in"
                data-aos-anchor-placement="top-center"
                data-aos-delay="300"
                className="flex items-center space-x-4"
              >
                <CheckIcon className="w-[2rem] h-[2rem] text-yellow-400" />
                <p className="text-[18px] text-white">
                  Information Technologies
                </p>
              </div>
              <div
                data-aos="zoom-in"
                data-aos-anchor-placement="top-center"
                data-aos-delay="300"
                className="flex items-center space-x-4"
              >
                <CheckIcon className="w-[2rem] h-[2rem] text-yellow-400" />
                <p className="text-[18px] text-white">Software Development</p>
              </div>
              <div
                data-aos="zoom-in"
                data-aos-anchor-placement="top-center"
                data-aos-delay="400"
                className="flex items-center space-x-4"
              >
                <CheckIcon className="w-[2rem] h-[2rem] text-yellow-400" />
                <p className="text-[18px] text-white">Problem Solving</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:ml-auto mt-[3rem]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[2rem]">
            <div className="p-6 text-center bg-yellow-500 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <p className="text-[50px] text-black font-bold">4</p>
              <p className="text-[20px] text-black font-semibold">
                Internships Completed
              </p>
            </div>
            <div className="p-6 text-center bg-yellow-500 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <p className="text-[50px] text-black font-bold">200+</p>
              <p className="text-[20px] text-black font-semibold">
                Hours Worked on Projects
              </p>
            </div>
            <div className="p-6 text-center bg-yellow-500 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <p className="text-[50px] text-black font-bold">15+</p>
              <p className="text-[20px] text-black font-semibold">
                Certifications & Awards
              </p>
            </div>
            <div className="p-6 text-center bg-yellow-500 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <p className="text-[50px] text-black font-bold">2+</p>
              <p className="text-[20px] text-black font-semibold">
                Academic Papers
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
