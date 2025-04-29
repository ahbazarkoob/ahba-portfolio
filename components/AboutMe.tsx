import React from "react";
import Section from "./Section";

const AboutMe = () => {
  return (
    <Section id="aboutMe">
      <div className="flex flex-col gap-8 h-[90vh] items-center justify-center">
          <div className="flex flex-col justify-center items-center gap-4 w-full md:w-1/2 text-center">
            <p className="font-normal text-xl md:text-start text-center underline">
              FRONT END DEVELOPER
            </p>
            <p className="text-base text-center justify-center">
              I've been working as Software Developer, Front-End at Flattr with
              experience on the Flutter-based Novo Flashmart app and an EHR web
              app for Join Pomegranate, integrating 200+ RESTful APIs, 50+
              dynamic forms, and real-time WebSocket messaging. Proficient in
              Dart, JavaScript, TypeScript, and tools like Redux and Shaden/UI.
              B.E. in Computer Science (2023) from the University of Kashmir.
            </p>
          </div>
      </div>
    </Section>
  );
};

export default AboutMe;
