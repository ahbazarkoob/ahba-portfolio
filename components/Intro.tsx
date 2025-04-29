import React from "react";
import Section from "./Section";
import Image from "next/image";
import src from "@/assets/illustration.jpg";

const Intro = () => {
  return (
    <Section id="intro">
      <div className="flex flex-col gap-8 h-auto md:h-[90vh] lg:h-[90vh] items-center justify-center">
        <div className="flex flex-1 flex-col-reverse md:flex-row justify-center items-center gap-4">
          <div className="flex flex-col gap-4 w-full md:w-1/2">
            <div className="flex flex-col">
              <h1 className="text-4xl md:text-start text-center">
                Hello, I’m <span className="font-semibold">Ahba.</span>
              </h1>
            </div>
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
    </Section>
  );
};

export default Intro;
