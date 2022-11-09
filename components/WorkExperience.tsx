import Image from "next/image";
import React from "react";
import { workExpData } from "../utilities/data";
import ExpBlock from "./ExpBlock";

const WorkExperience = () => {
  return (
    <section className="flex flex-col md:flex-row py-6 gap-10 items-center">
      <div className="flex-1">
        <div className="relative w-40 h-40 mx-auto md:mx-0">
          <Image
            alt=""
            src="/images/suitcase.png"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="text-center md:text-left">
          <h2 className="font-bold text-3xl mb-2 text-main-c">
            Work Experience
          </h2>
          <p>
            The experience of working in several marketing agencies and a higher
            education institution has equipped me as a multimedia professional
            in both commercial and educational fields.
          </p>
        </div>
      </div>
      <div className="flex-1">
        {/* Blocks of previous jobs */}
        {workExpData.map(({ id, duration, company, position, imageUrl }) => (
          <ExpBlock
            key={id}
            duration={duration}
            company={company}
            position={position}
            imageUrl={imageUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
