import React, { FC } from "react";
import WorkBlock from "./WorkBlock";

const WorkCatagory = () => {
  return (
    <div className="mb-10">
      <h3 className="text-xl font-bold my-4">UI/UX and Web Dev</h3>
      <hr className="my-4" />
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-4">
        <WorkBlock />
        <WorkBlock />
        <WorkBlock />
      </div>
    </div>
  );
};

export default WorkCatagory;
