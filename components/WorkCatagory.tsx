import React, { FC } from "react";
import { projectDataType } from "../utilities/types";
import WorkBlock from "./WorkBlock";

interface Props {
  key: number;
  props: {
    name: string;
    code: string;
  };
  data: projectDataType[];
}

const WorkCatagory: FC<Props> = ({ props, data }) => {
  return (
    <div className="mb-10">
      <h3 className="text-xl font-bold my-4 text-main-c">{props.name}</h3>
      <hr className="my-4" />
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-4">
        {data.map((data) =>
          data.catagory === props.code ? (
            <WorkBlock key={data.id} data={data} />
          ) : (
            ""
          )
        )}
      </div>
    </div>
  );
};

export default WorkCatagory;
