import React from "react";
import ServiceCard from "./Helper/ServiceCard";

const Services = () => {
  return (
    <div id="services" className="pt-20 pb-12 bg-[#0b0c13]">
      <div className="text-center">
        <p className="heading__mini">Professional Expertise</p>
        <h1 className="heading__primary">
          My Core <span className="text-yellow-300">Offerings</span>
        </h1>
      </div>
      <div className="pt-16 px-4 max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ServiceCard
          title="Web Development"
          num="01"
          description="Creating high-performance, user-friendly, and dynamic websites using modern technologies and frameworks like React and Angular."
        />
        <ServiceCard
          title="Project Management"
          num="02"
          description="Skilled in Agile methodologies, project planning, team management, and ensuring timely delivery of projects."
        />
        <ServiceCard
          title="UI/UX Design"
          num="03"
          description="Designing intuitive and aesthetically pleasing user interfaces to enhance overall user experience."
        />
        <ServiceCard
          title="Content Translation"
          num="04"
          description="Providing accurate and culturally relevant translations of technical and educational content to bridge language barriers."
        />
        <ServiceCard
          title="Professional Photography"
          num="05"
          description="Specialized in professional photography, including restaurant menu shoots and product photography for renowned brands, such as luxury pillow shoots."
        />
        <ServiceCard
          title="Technical Training & Seminars"
          num="06"
          description="Conducting hands-on training and seminars on Python, data visualization, and other technical topics to empower individuals and teams."
        />
      </div>
    </div>
  );
};

export default Services;
