import React from "react";

const Footer = () => {
  return (
    <div className="border-t-2 mt-[50px]">
      <div className="flex max-w-6xl mx-auto px-4 py-10 items-center">
        <div className="flex gap-2 flex-1 items-center">
          <div className=" bg-slate-300 h-10 w-10 rounded-full"></div>
          <div>
            <p className="font-bold">Terry’s Portfolio Website 2022</p>
            <p className="text-sm italic">Built with Next JS</p>
          </div>
        </div>
        <div className="flex-1">
          <p className="text-sm">
            All the contents from this website are only for recuitment purpose.
            If you have any questions regarding copyrights, please contact me
            via terryhycheng@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
