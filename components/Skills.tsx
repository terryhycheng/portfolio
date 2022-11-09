import React, { FC } from "react";
import { skillData } from "../utilities/data";
import SkillComponent from "./SkillComponent";

const Skills: FC = () => {
  return (
    <section className="mb-6">
      <h2 className="font-bold text-3xl mb-6 text-main-c">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {skillData.map(({ id, name, logoUrl }) => (
          <SkillComponent key={id} name={name} logoUrl={logoUrl} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
