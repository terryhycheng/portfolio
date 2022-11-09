import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { projectDataType } from "../utilities/types";

interface Props {
  data: projectDataType;
}

const WorkBlock: FC<Props> = ({ data }) => {
  return (
    <>
      <div className="h-full">
        <Link href={data.url}>
          <div className="h-[24vh] relative cursor-pointer hover:opacity-80 ani">
            <Image src={data.imageUrl} layout="fill" objectFit="cover" alt="" />
          </div>
        </Link>
        <div className="pt-4">
          <p className="text-sm opacity-50">{data.type}</p>
          <h4 className="font-bold text-lg mb-1">{data.name}</h4>
          <p className="text-sm font-light">{data.description}</p>
        </div>
      </div>
    </>
  );
};

export default WorkBlock;
