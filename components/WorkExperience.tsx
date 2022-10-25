import React from "react";
import ExpBlock from "./ExpBlock";

const WorkExperience = () => {
  return (
    <section className="flex py-6 items-center">
      <div className="flex-1">
        <div className="bg-slate-600 w-20 h-20 mb-6 rounded-full"></div>
        <h2 className="font-bold text-3xl mb-2">Work Experience</h2>
        <p>
          The experience of working in several marketing agencies and a higher
          education institution has equipped me as a multimedia professional in
          both commercial and educational fields.
        </p>
      </div>
      <div className="flex-1">
        {/* Blocks of previous jobs */}
        <ExpBlock />
        <ExpBlock />
        <ExpBlock />
        <ExpBlock />
      </div>
    </section>
  );
};

export default WorkExperience;
