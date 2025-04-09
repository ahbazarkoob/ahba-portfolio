import React from "react";
import Image from "next/image";

const SkillItem = ({ name, icon }: { name: string; icon: string }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <Image
        alt={name}
        src={icon}
        width={50}
        height={50}
        className="object-contain"
      />
      <span className="text-sm text-center">{name}</span>
    </div>
  );
};

export default SkillItem;
