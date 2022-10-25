import React, { FC } from "react";
import SkillComponent from "./SkillComponent";

const Skills: FC = () => {
  return (
    <section className="my-4">
      <h2 className="font-bold text-2xl mb-6">Skills</h2>
      <div className="grid grid-cols-3 gap-2">
        <SkillComponent />
        <SkillComponent />
        <SkillComponent />
        <SkillComponent />
        <SkillComponent />
      </div>
    </section>
  );
};

export default Skills;
