import React from "react";
import Image from "next/image";

const SkillItem = ({ name, icon }: { name: string; icon: string }) => {
  return (
    <div className="flex flex-row text-black items-center gap-3 rounded-lg bg-secondary font-bold">
      {/* <img
        alt={name}
        loading="lazy"
        data-nimg="1"
        className="sm:h-8 sm:w-8"
        color="transparent"
        src={icon}
      ></img> */}
      <Image
        alt={name}
        loading="lazy"
        src={icon}
        width={40}
        height={40}
        decoding="async"
        color="transparent"
        className="object-contain sm:h-8 sm:w-8"
      /> 
      {name}
      {/* <span className="text-lg text-center font-bold ">{name}</span> */}
    </div>
  );
};

export default SkillItem;
