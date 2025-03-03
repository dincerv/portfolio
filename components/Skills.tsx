import React, { useState } from "react";

const skillsData = [
  {
    category: "Frontend Development",
    skills: [
      { name: "React.js", level: "Intermediate" },
      { name: "JavaScript", level: "Advanced" },
      { name: "HTML & CSS", level: "Expert" },
      { name: "Bootstrap", level: "Intermediate" },
      { name: "TailwindCSS", level: "Intermediate" },
    ],
  },
  {
    category: "Backend & Databases",
    skills: [
      { name: "Node.js", level: "Intermediate" },
      { name: "MongoDB", level: "Intermediate" },
      { name: "MySQL", level: "Intermediate" },
      { name: "Firebase", level: "Beginner" },
      { name: "PHP", level: "Beginner" },
    ],
  },
  /*{
    category: "Project Management & Agile",
    skills: [
      { name: "Agile Methodologies", level: "Expert" },
      { name: "Scrum", level: "Advanced" },
      { name: "Jira", level: "Intermediate" },
      { name: "Trello", level: "Intermediate" },
      { name: "Monday", level: "Basic" },
    ],
  },*/
  {
    category: "Design & Prototyping",
    skills: [
      { name: "Figma", level: "Advanced" },
      { name: "Adobe Photoshop", level: "Intermediate" },
      { name: "Canva", level: "Expert" },
      //{ name: "Wireframing", level: "Basic" },
    ],
  },
  {
    category: "Version Control & CI/CD",
    skills: [
      { name: "Git", level: "Intermediate" },
      { name: "GitHub", level: "Advanced" },
      { name: "Vercel", level: "Intermediate" },
    ],
  },
];

const levelColors = {
  Expert: "bg-green-500 text-white",
  Advanced: "bg-blue-500 text-white",
  Intermediate: "bg-yellow-500 text-black",
  Beginner: "bg-orange-500 text-black",
  Basic: "bg-red-500 text-white",
};

const Skills = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <div id="skills" className="pt-[5rem] pb-[3rem] bg-black">
      <div className="w-[80%] mx-auto">
        <h1 className="text-white text-4xl font-bold text-center">
          My <span className="text-yellow-300">Skills</span> & Expertise
        </h1>
        <p className="text-gray-400 mt-3 text-lg text-center">
          I specialize in frontend development, UI/UX design, and project
          management. Below is a breakdown of my key skills.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((skillCategory, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-xl shadow-md flex flex-col justify-between h-[270px]"
            >
              <h3 className="text-yellow-300 text-xl font-semibold text-center mb-2">
                {skillCategory.category}
              </h3>
              <div className="space-y-2">
                {skillCategory.skills.slice(0, 3).map((skill, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="text-white text-lg font-medium">
                      {skill.name}
                    </span>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        levelColors[skill.level]
                      }`}
                    >
                      {skill.level}
                    </span>
                  </div>
                ))}
                {expandedIndex === index &&
                  skillCategory.skills.slice(3).map((skill, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <span className="text-white text-lg font-medium">
                        {skill.name}
                      </span>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          levelColors[skill.level]
                        }`}
                      >
                        {skill.level}
                      </span>
                    </div>
                  ))}
              </div>

              <button
                onClick={() =>
                  setExpandedIndex(expandedIndex === index ? null : index)
                }
                className="text-sm text-blue-400 mt-4 underline self-center hover:text-blue-300 transition-all"
              >
                {expandedIndex === index ? "Show Less" : "Read More"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
