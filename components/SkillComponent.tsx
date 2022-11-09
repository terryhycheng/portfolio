import Image from "next/image";
import React, { FC } from "react";

interface Props {
  name: string;
  logoUrl: string;
}

const SkillComponent: FC<Props> = ({ name, logoUrl }) => {
  return (
    <div className="flex gap-4 p-4 border rounded-md items-center hover-effect ani">
      <div className="relative h-10 w-10">
        <Image src={logoUrl} layout="fill" objectFit="contain" alt="" />
      </div>
      <div>{name}</div>
    </div>
  );
};

export default SkillComponent;
