import React from "react";
import WorkCatagory from "./WorkCatagory";

const WorkGrid = () => {
  return (
    <section>
      {/* Title */}
      <div className="sticky top-0 bg-white bg-opacity-90 py-4 flex flex-col gap-2">
        <h2 className=" font-bold text-3xl mb-2">Works</h2>
        <p>
          The projects listed below can show you what I am capable of as a
          multimedia specialist. Most of them are from my previous jobs. Please
          feel free to click and check the details.
        </p>
        <div className="my-3 flex gap-2">
          <button className="border border-slate-400 rounded-full px-4 py-1">
            UI/UX & Web Dev
          </button>
          <button className="border border-slate-400 rounded-full px-4">
            Graphic Design
          </button>
          <button className="border border-slate-400 rounded-full px-4">
            Side projects
          </button>
        </div>
      </div>
      <WorkCatagory />
      <WorkCatagory />
      <WorkCatagory />
    </section>
  );
};

export default WorkGrid;
