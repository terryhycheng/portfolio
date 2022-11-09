import React from "react";
import { projectData } from "../utilities/data";
import WorkBlock from "./WorkBlock";
import WorkCatagory from "./WorkCatagory";

const WorkGrid = () => {
  const catagories = [
    { name: "UI/UX and Web Dev", code: "UIUX" },
    { name: "Graphic Design", code: "graphic" },
    { name: "Side Projects", code: "side" },
  ];
  return (
    <section>
      {/* Title */}
      <div className="py-4 mb-6 flex flex-col gap-2">
        <h2 className=" font-bold text-3xl mb-2 text-main-c">Projects</h2>
        <p>
          The projects listed below can show you what I am capable of as a
          multimedia specialist. Most of them are from my previous jobs. Please
          feel free to click and check the details.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {projectData.map((data) => (
          <WorkBlock key={data.slug} data={data} />
        ))}
      </div>
    </section>
  );
};

export default WorkGrid;
