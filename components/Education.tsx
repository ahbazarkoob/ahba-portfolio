import React from "react";
import Section from "@/components/Section";
import { courses, education } from "@/data";

const Education = () => {
  return (
    <Section id="education">
      <div className="flex flex-col gap-8 md:h-[100vh] items-center justify-center mt-5">
        <h2 className="text-2xl font-bold text-[#736B60] mb-4">Education</h2>
        <div className="flex flex-col gap-8">
          <div className="relative">
            {education.map((edu, index) => (
              <div
                key={index}
                className="flex items-center w-full mb-12 flex-row"
              >
                <div className="w-full p-6 bg-white rounded-lg shadow-md border border-gray-200">
                  <h2 className="text-xl font-semibold text-[#736B60]">
                    {edu.title}
                  </h2>
                  <div>
                    <p className="text-lg font-medium text-[#736B60]">
                      {edu.university}
                    </p>
                    <p className="text-sm text-[#A49694]">{edu.duration}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-8">
            <h2 className="text-2xl font-bold text-[#736B60] mb-4 text-center">Courses</h2>
            <div className="flex flex-wrap gap-5 items-center justify-center">
              {courses.map((course, index) => (
                <div
                  key={index}
                  className="flex w-96 flex-col bg-white rounded-lg shadow-md border border-gray-200 p-6"
                >
                  <h2 className="text-xl font-semibold text-[#736B60]">
                    {course.title}
                  </h2>
                  <p className="text-lg font-medium text-[#736B60]">
                    {course.university}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Education;
