import React from "react";
import Section from "@/components/Section";
import { courses, education } from "@/data";

const Education = () => {
  return (
    <Section id="education">
      <div className="flex flex-col gap-8 md:h-[100vh] items-center justify-center mt-5">
        <h2 className="pb-12 text-center text-4xl font-bold sm:text-3xl">Education</h2>
        <div className="flex flex-col gap-8">
          <div className="relative">
            {education.map((edu, index) => (
              <div
                key={index}
                className="flex items-center w-full mb-12 flex-row"
              >
                <div className="w-full p-6 bg-white rounded-lg shadow-md border border-gray-200">
                  <h2 className="text-xl font-semibold ">
                    {edu.title}
                  </h2>
                  <div>
                    <p className="text-lg font-medium">
                      {edu.university}
                    </p>
                    <p className="text-sm">{edu.duration}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-8">
            <h2 className="pb-12 text-center text-4xl font-bold sm:text-3xl">Courses</h2>
            <div className="flex flex-wrap gap-5 items-center justify-center">
              {courses.map((course, index) => (
                <div
                  key={index}
                  className="flex w-96 flex-col bg-white rounded-lg shadow-md border border-gray-200 p-6 h-32"
                >
                  <h2 className="text-lg font-semibold">
                    {course.title}
                  </h2>
                  <p className="text-sm">
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
