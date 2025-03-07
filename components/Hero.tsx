import React from "react";
import Image from "next/image";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="hero"
      className="w-[100vw] pt-[4vh] md:pt-[12vh] h-[85vh] md:h-[100vh] custom-bg"
    >
      <div className="flex justify-center flex-col w-[80%] h-[100%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[3rem] items-center">
          <div>
            <div data-aos="fade-left" data-aos-delay="400">
              <h1 className="xl:text-[50px] lg:text-[40px] sm:text-[35px] text-[25px] font-semibold leading-[2.4rem] text-white">
                Hi, I&rsquo;m{" "}
                <span className="text-yellow-300">Dincer Velioglu</span>
              </h1>
              {/* Kayan yazı yerine sabit bir alt başlık */}
              <h2 className="text-[#c4cfde] text-[18px] md:text-[22px] mt-2">
                Frontend Developer & Web Enthusiast
              </h2>
            </div>
            <p
              data-aos="fade-up"
              data-aos-delay="800"
              className="mt-[1.2rem] text-[15px] md:text-[17px] text-[#c4cfde]"
            >
              A recent graduate passionate about frontend development, web
              technologies, and project management. Experienced in building
              practical solutions and eager to contribute to innovative digital
              experiences. Always seeking new challenges to enhance both
              technical and communication skills.
            </p>
            <div className="mt-[2rem] flex items-center space-x-6">
              {/* Hire Me Button */}
              <button
                onClick={scrollToContact}
                className="relative flex h-[50px] w-40 items-center justify-center font-semibold overflow-hidden bg-red-500 text-white shadow-lg transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-blue-600 before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56 hover:before:translate-x-0 hover:before:translate-y-0"
              >
                <span className="relative z-10">Hire Me</span>
              </button>

              {/* Download CV Button */}
              <a
                href="/DincerVelioglu_CV.pdf"
                download
                className="relative flex h-[50px] w-40 items-center justify-center font-semibold overflow-hidden bg-orange-600 text-white shadow-lg transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-blue-500 before:duration-300 before:ease-out hover:before:h-48 hover:before:w-48 hover:before:translate-x-0 hover:before:translate-y-0"
              >
                <span className="relative z-10">Download CV</span>
              </a>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay="2000"
            className="hidden md:block"
          >
            <Image
              src="/images/hero.png"
              alt="hero"
              width={500}
              height={500}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
