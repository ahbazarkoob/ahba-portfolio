import React from "react";
import Section from "@/components/Section";
import { skills } from "@/data";
import SkillItem from "@/components/SkillItem";

const Skills = () => {
  return (
    <Section id="skills">
      <div className="flex flex-col gap-8 md:h-[100vh] items-center justify-center">
        <h2 className="pb-12 text-center text-4xl font-bold sm:text-3xl">Skills</h2>
        <div className="flex flex-col gap-8 text-[#4B4237] ">
          <div className="flex flex-wrap justify-center gap-7 md:gap-20 px-10">
            {skills.map((skill) => (
              <SkillItem key={skill.name} name={skill.name} icon={skill.icon} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Skills;

{
  /* <section id="skills" class="py-16"><div class="mx-auto max-w-5xl"><h2 class="pb-12 text-center text-4xl font-bold sm:text-3xl" style="opacity: 1; transform: none;"><span class="mr-2 text-target">//</span>Habilidades</h2><div class="flex flex-wrap justify-center gap-8" style="opacity: 1; transform: none;"><div class="flex items-center gap-3 rounded-lg bg-secondary px-4 py-2 font-bold" style="opacity: 1; transform: none;"><img alt="HTML" loading="lazy" width="40" height="40" decoding="async" data-nimg="1" class="sm:h-8 sm:w-8" style="color:transparent" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg">HTML</div><div class="flex items-center gap-3 rounded-lg bg-secondary px-4 py-2 font-bold" style="opacity: 1; transform: none;"><img alt="CSS" loading="lazy" width="40" height="40" decoding="async" data-nimg="1" class="sm:h-8 sm:w-8" style="color:transparent" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg">CSS</div><div class="flex items-center gap-3 rounded-lg bg-secondary px-4 py-2 font-bold" style="opacity: 1; transform: none;"><img alt="JavaScript" loading="lazy" width="40" height="40" decoding="async" data-nimg="1" class="sm:h-8 sm:w-8" style="color:transparent" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg">JavaScript</div><div class="flex items-center gap-3 rounded-lg bg-secondary px-4 py-2 font-bold" style="opacity: 1; transform: none;"><img alt="Sass" loading="lazy" width="40" height="40" decoding="async" data-nimg="1" class="sm:h-8 sm:w-8" style="color:transparent" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg">Sass</div><div class="flex items-center gap-3 rounded-lg bg-secondary px-4 py-2 font-bold" style="opacity: 1; transform: none;"><img alt="TypeScript" loading="lazy" width="40" height="40" decoding="async" data-nimg="1" class="sm:h-8 sm:w-8" style="color:transparent" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg">TypeScript</div><div class="flex items-center gap-3 rounded-lg bg-secondary px-4 py-2 font-bold" style="opacity: 1; transform: none;"><img alt="React" loading="lazy" width="40" height="40" decoding="async" data-nimg="1" class="sm:h-8 sm:w-8" style="color:transparent" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg">React</div><div class="flex items-center gap-3 rounded-lg bg-secondary px-4 py-2 font-bold" style="opacity: 1; transform: none;"><img alt="Tailwindcss" loading="lazy" width="40" height="40" decoding="async" data-nimg="1" class="sm:h-8 sm:w-8" style="color:transparent" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg">Tailwindcss</div><div class="flex items-center gap-3 rounded-lg bg-secondary px-4 py-2 font-bold" style="opacity: 1; transform: none;"><img alt="Nextjs" loading="lazy" width="40" height="40" decoding="async" data-nimg="1" class="sm:h-8 sm:w-8" style="color:transparent" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg">Nextjs</div><div class="flex items-center gap-3 rounded-lg bg-secondary px-4 py-2 font-bold" style="opacity: 1; transform: none;"><img alt="Node.js" loading="lazy" width="40" height="40" decoding="async" data-nimg="1" class="sm:h-8 sm:w-8" style="color:transparent" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg">Node.js</div><div class="flex items-center gap-3 rounded-lg bg-secondary px-4 py-2 font-bold" style="opacity: 1; transform: none;"><img alt="Express" loading="lazy" width="40" height="40" decoding="async" data-nimg="1" class="sm:h-8 sm:w-8" style="color:transparent" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg">Express</div><div class="flex items-center gap-3 rounded-lg bg-secondary px-4 py-2 font-bold" style="opacity: 1; transform: none;"><img alt="PostgreSQL" loading="lazy" width="40" height="40" decoding="async" data-nimg="1" class="sm:h-8 sm:w-8" style="color:transparent" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg">PostgreSQL</div><div class="flex items-center gap-3 rounded-lg bg-secondary px-4 py-2 font-bold" style="opacity: 1; transform: none;"><img alt="Git" loading="lazy" width="40" height="40" decoding="async" data-nimg="1" class="sm:h-8 sm:w-8" style="color:transparent" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg">Git</div></div></div></section> */
}
