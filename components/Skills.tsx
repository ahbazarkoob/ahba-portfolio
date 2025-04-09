import React from "react";
import Section from "@/components/Section";
import { frameworks, frontEnd, skills, tools } from "@/data";
import SkillItem from "@/components/SkillItem";

const Skills = () => {
  return (
    <Section id="skills">
      <div className="flex flex-col gap-8 h-[100vh] items-center justify-center mt-10">
        <h2 className="text-2xl font-bold text-[#736B60] mb-4">Skills</h2>
        <div className="flex flex-col gap-8 text-[#4B4237] ">
          <ul className="flex flex-col gap-8">
            <li className="flex flex-col gap-4 items-center">
              <strong>Languages:</strong>{" "}
              <div className="flex flex-wrap gap-10 items-center justify-center px-4 ">
                {skills.map((skill) => (
                  <SkillItem
                    key={skill.name}
                    name={skill.name}
                    icon={skill.icon}
                  />
                ))}
              </div>
            </li>
            <li className="flex flex-col gap-4 items-center">
              <strong>Frameworks:</strong>{" "}
              <div className="flex flex-wrap gap-10 items-center justify-center px-4 ">
                {frameworks.map((framework) => (
                  <SkillItem
                    key={framework.name}
                    name={framework.name}
                    icon={framework.icon}
                  />
                ))}
              </div>
            </li>
            <li className="flex flex-col gap-4 items-center">
              <strong>Tools:</strong>{" "}
              <div className="flex flex-wrap gap-10 items-center justify-center px-4 ">
                {tools.map((tool) => (
                  <SkillItem
                    key={tool.name}
                    name={tool.name}
                    icon={tool.icon}
                  />
                ))}
              </div>
            </li>
            <li className="flex flex-col gap-4 items-center">
              <strong>Front End:</strong>{" "}
              <div className="flex flex-wrap gap-10 items-center justify-center px-4 ">
                {frontEnd.map((frontEndTech) => (
                  <SkillItem
                    key={frontEndTech.name}
                    name={frontEndTech.name}
                    icon={frontEndTech.icon}
                  />
                ))}
              </div>
            </li>
            {/* <li>
          <strong>State Management:</strong> GetX, Redux, Provider, Redux
          Persist
        </li>
        <li>
          <strong>APIs & Protocols:</strong> RESTful APIs, WebSockets, Zod
          Schema Validation
        </li>
        <li>
          <strong>Key Competencies:</strong> Responsive UI/UX, Real-Time
          Messaging, EHR Systems
        </li> */}
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default Skills;
