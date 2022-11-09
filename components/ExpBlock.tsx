import Image from "next/image";
import React, { FC } from "react";

interface Props {
  duration: string;
  company: string;
  position: string;
  imageUrl: string;
}

const ExpBlock: FC<Props> = ({ duration, company, position, imageUrl }) => {
  return (
    <div className="flex items-center gap-10 shadow-md px-8 py-4 rounded-md hover-effect ani">
      <div className="flex relative w-20 h-10">
        <Image alt="" src={imageUrl} layout="fill" objectFit="contain" />
      </div>
      <div className="p-2">
        <p className="text-sm">{duration}</p>
        <p className="font-bold">{company}</p>
        <p className="text-sm italic opacity-50">{position}</p>
      </div>
    </div>
  );
};

export default ExpBlock;
