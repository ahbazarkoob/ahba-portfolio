import React from "react";
import Image from "next/image";
import src from "@/assets/illustration.jpg";
import Section from "./Section";

const AboutMe = () => {
  return (
    <Section id="aboutMe">
      <div className="flex flex-col gap-8 h-[90vh] items-center justify-center">
        <div className="flex flex-1 flex-col-reverse md:flex-row justify-center items-center gap-4">
          <div className="flex flex-col text-[#736B60] gap-4 w-full md:w-1/2">
            <div className="flex flex-col">
              <h1 className="text-4xl md:text-start text-center">
                Hello, I’m <span className="font-semibold">Ahba.</span>
              </h1>
              {/* <p className="font-normal text-xl md:text-start text-center underline">
                FRONT END DEVELOPER
              </p> */}
            </div>
            {/* <p className="text-base text-[#A49694] text-center justify-center">
              I've been working as Software Developer, Front-End at Flattr with
              experience on the Flutter-based Novo Flashmart app and an EHR web
              app for Join Pomegranate, integrating 200+ RESTful APIs, 50+
              dynamic forms, and real-time WebSocket messaging. Proficient in
              Dart, JavaScript, TypeScript, and tools like Redux and Shaden/UI.
              B.E. in Computer Science (2023) from the University of Kashmir.
            </p> */}
          </div>
          <div className="flex w-full md:w-1/2 items-center justify-center">
            <Image
              alt="Ahba’s Illustration"
              src={src}
              width={300}
              height={300}
              className="object-contain"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8 items-center justify-center">
        <div className="flex flex-1 flex-col-reverse md:flex-row justify-center items-center gap-4">
          <div className="flex flex-col text-[#736B60] gap-4 w-full md:w-1/2">
            <p className="font-normal text-xl md:text-start text-center underline">
              FRONT END DEVELOPER
            </p>
            <p className="text-base text-[#A49694] text-center justify-center">
              I've been working as Software Developer, Front-End at Flattr with
              experience on the Flutter-based Novo Flashmart app and an EHR web
              app for Join Pomegranate, integrating 200+ RESTful APIs, 50+
              dynamic forms, and real-time WebSocket messaging. Proficient in
              Dart, JavaScript, TypeScript, and tools like Redux and Shaden/UI.
              B.E. in Computer Science (2023) from the University of Kashmir.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutMe;
