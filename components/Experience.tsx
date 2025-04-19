import React from "react";
import Section from "@/components/Section";
import { experiences } from "@/data";

const Experience = () => {
  return (
    <Section id="experience">
      <div className="hidden md:flex flex-col gap-8 h-[100vh] items-center justify-center mt-32 ">
        <h2 className="text-2xl font-bold text-[#736B60]">Experience</h2>
        <div className="flex flex-col gap-8 relative w-full">
          {/* Vertical timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 h-full"></div>
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`flex items-center w-full mb-12 ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              <div className="w-5/12 p-6 bg-white rounded-lg shadow-md border border-gray-200">
                <h2 className="text-xl font-semibold text-[#736B60]">
                  {exp.title}
                </h2>
                <div>
                  <div className="flex flex-row justify-between items-baseline">
                    <p className="text-lg font-medium text-[#736B60]">
                      {exp.company}
                    </p>
                    <p className="text-sm text-[#A49694]">{exp.duration}</p>
                  </div>
                </div>
                {exp.projects.map((project, projIndex) => (
                  <div key={projIndex} className="mt-2">
                    <h3 className="text-md font-medium text-[#4B4237]">
                      {project.name}
                    </h3>
                    <ul className="list-disc list-inside text-sm text-[#736B60] mt-2">
                      {project.details.map((detail, detailIndex) => (
                        <li key={detailIndex}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="w-2/12 flex justify-center">
                <div className="w-4 h-4 bg-blue-500 rounded-full z-10 border-4 border-white"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="md:hidden">
        <h2 className="text-2xl font-bold text-[#736B60] mb-6">Experience</h2>
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 scrollbar-hide">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-11/12 sm:w-10/12 max-w-[340px] p-6 bg-white rounded-lg shadow-md border border-gray-200 snap-center"
            >
              <h2 className="text-xl font-semibold text-[#736B60]">
                {exp.title}
              </h2>
              <div className="flex flex-col md:flex-row justify-between items-baseline mt-2">
                <p className="text-lg font-medium text-[#736B60]">
                  {exp.company}
                </p>
                <p className="text-sm text-[#A49694]">{exp.duration}</p>
              </div>
              {exp.projects.map((project, projIndex) => (
                <div key={projIndex} className="mt-4">
                  <h3 className="text-md font-medium text-[#4B4237]">
                    {project.name}
                  </h3>
                  <ul className="list-disc list-inside text-sm text-[#736B60] mt-2">
                    {project.details.map((detail, detailIndex) => (
                      <li key={detailIndex}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Experience;
