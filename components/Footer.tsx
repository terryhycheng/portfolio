import Image from "next/image";
import React from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="relative overflow-hidden">
      {/* dots */}
      {/* <div className="hidden 2xl:block">
        <div className="absolute h-full w-[300px] -z-10 -right-[150px]">
          <Image
            src={"/images/dots.png"}
            layout="fill"
            objectFit="contain"
            alt=""
          />
        </div>
        <div className="absolute h-full w-[300px] -z-10 -left-[150px]">
          <Image
            src={"/images/dots.png"}
            layout="fill"
            objectFit="contain"
            alt=""
          />
        </div>
      </div> */}
      {/* Contents */}
      <div className="flex max-w-6xl mx-auto px-4 md:px-0 pt-10 pb-6 items-center">
        <div className="flex gap-4 flex-1 items-center">
          <div className="relative w-10 h-10">
            <Image
              src="/images/logo.png"
              layout="fill"
              objectFit="contain"
              alt=""
            />
          </div>
          <div>
            <p className="text-xs tracking-wider font-light">
              Designed and Built by Terry Cheng with Next.JS
            </p>
          </div>
        </div>
        <div className="flex-1 flex gap-8 justify-end">
          {/* <p className="text-sm font-light">
            All the contents from this website are only for recuitment purpose.
            If you have any questions regarding copyrights, please contact me
            via{" "}
            <a
              href="mailto:terryhycheng@gmail.com"
              className="text-main-c underline"
            >
              terryhycheng@gmail.com
            </a>
          </p> */}
          <a
            href="https://github.com/terryhycheng"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub className="text-2xl hover:text-[color:var(--sec-c)] cursor-pointer" />
          </a>
          <a
            href="https://www.linkedin.com/in/terryhycheng/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin className="text-2xl hover:text-[color:var(--sec-c)] cursor-pointer" />
          </a>
          <a
            href="mailto:terryhycheng@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineMail className="text-2xl hover:text-[color:var(--sec-c)] cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
