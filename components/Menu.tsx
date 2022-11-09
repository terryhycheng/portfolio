import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

const Menu: FC = () => {
  return (
    <div className="sticky top-0 bg-white bg-opacity-90 z-20">
      <div className="container mx-auto flex justify-between py-6 mb-3 max-w-6xl px-4">
        <div className="relative w-10 h-10 cursor-pointer">
          <Link href={"/"}>
            <Image
              src="/images/logo.png"
              layout="fill"
              objectFit="contain"
              alt=""
            />
          </Link>
        </div>
        <nav className="flex gap-8  items-center text-main-c">
          <span className="hover:text-[color:var(--sec-c)]">
            <Link href="/">Home</Link>
          </span>
          <span className="hover:text-[color:var(--sec-c)]">
            <Link href="/about">About</Link>
          </span>
          <span className="hover:text-[color:var(--sec-c)]">
            <a
              href="https://drive.google.com/file/d/1zShzU98CsEocZBWA6i3sC_LgFduHZqdo/view?usp=share_link"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </span>
        </nav>
      </div>
    </div>
  );
};

export default Menu;
