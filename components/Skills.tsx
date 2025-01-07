import React from "react";
import SkillCard from "./Helper/SkillCard";

const Skills = () => {
  return (
    <div id="skills" className="pt-[5rem] pb-[3rem] bg-black">
      <div className="grid w-[80%] mx-auto grid-cols-1 lg:grid-cols-7 gap-[2rem] items-center">
        {/* Skills Introduction Section */}
        <div className="col-span-3">
          <p className="heading__mini">My Skills</p>
          <h1 className="heading__primary">
            Explore My Popular <span className="text-yellow-300">Skills</span> &
            Expertise
          </h1>
          <p className="text-[15px] mb-[1.5rem] text-white opacity-70 mt-[1.5rem]">
            With years of experience in web development and design, I have honed
            my skills in modern technologies like React, JavaScript, and UI/UX
            design. I have also collaborated on large-scale projects, delivering
            user-centric solutions and enhancing performance.
          </p>
          <button className="relative flex h-[50px] w-40 items-center justify-center font-semibold overflow-hidden bg-red-500 text-white shadow-lg transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-blue-600 before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56 hover:before:translate-x-0 hover:before:translate-y-0">
            <span className="relative z-10">Learn More</span>
          </button>
        </div>

        {/* Skills Display Section */}
        <div className="col-span-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-[1rem] items-center">
            {/* Skill Cards */}
            <SkillCard
              title="React"
              image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              percent="90%"
            />
            <SkillCard
              title="JavaScript"
              image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              percent="85%"
            />
            <SkillCard
              title="UI/UX Design"
              image="https://via.placeholder.com/150/00FF00/FFFFFF/?text=UIUX"
              percent="80%"
            />
            <SkillCard
              title="HTML/CSS"
              image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              percent="95%"
            />
            <SkillCard
              title="Python"
              image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
              percent="75%"
            />
            <SkillCard
              title="Project Management"
              image="https://cdn-icons-png.flaticon.com/512/1810/1810717.png"
              percent="80%"
            />
            <SkillCard
              title="Content Translation"
              image="https://cdn-icons-png.flaticon.com/512/1077/1077063.png"
              percent="90%"
            />
            <SkillCard
              title="Photography"
              image="https://cdn-icons-png.flaticon.com/512/2921/2921822.png"
              percent="85%"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
