import React, { FC } from "react";

const HomeHero: FC = () => {
  return (
    <section className="flex gap-5">
      <div className="flex-1 py-3 flex flex-col gap-2">
        <h2 className="text-3xl font-bold">Welcome. I’m Terry Cheng. </h2>
        <h3 className="text-xl font-semibold">
          A digital designer & front-end developerbased in Manchester, UK.
        </h3>
        <p>
          With more than 6 years of experience working in the design industry, I
          am able to handle tasks related to graphic design, motion graphics and
          also front-end development.
        </p>
        <button className="border border-slate-800 p-2 rounded-md mt-4 max-w-xs">
          My Resume
        </button>
      </div>
      <div className="flex-1 bg-slate-400"></div>
    </section>
  );
};

export default HomeHero;
