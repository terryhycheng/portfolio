import Image from "next/image";
import React, { FC } from "react";

const HomeHero: FC = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row gap-5 my-6 items-center relative">
      <div className="absolute w-10 h-10 z-10 right-0 animate-bounce hidden md:block">
        <Image
          src={"/images/cursor.png"}
          layout="fill"
          objectFit="contain"
          alt=""
        />
      </div>
      {/* Contents */}
      <div className="flex-1 py-3 flex flex-col gap-2">
        <h2 className="text-[70px] uppercase font-bold font-fugaz-one leading-none">
          Terry <br />{" "}
          <span className="relative">
            Cheng{" "}
            <div className=" absolute bottom-4 bg-[#F1E4D1] h-6 w-full -z-10"></div>
          </span>
        </h2>
        <h3 className="text-2xl font-medium my-2 tracking-wider">
          Front-end Developer | Designer
        </h3>
        <div className="relative h-10 w-[300px] -z-10">
          <Image
            src={"/images/dots.png"}
            layout="fill"
            objectFit="contain"
            alt=""
          />
        </div>
        <p>
          With more than 6 years of experience working in the design industry, I
          am able to handle tasks related to graphic design, motion graphics and
          also front-end development.
        </p>
      </div>
      <div className="flex-1 relative min-h-[40vh] w-full">
        <Image
          src={"/images/character-1.png"}
          layout="fill"
          objectFit="contain"
          objectPosition="right"
          alt=""
        />
      </div>
    </section>
  );
};

export default HomeHero;
