import Link from "next/link";
import React, { FC } from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

const Menu: FC = () => {
  return (
    <div className="container mx-auto flex justify-between py-6 mb-3 max-w-6xl px-4">
      <div className="">Logo</div>
      <nav className="flex gap-6 items-center">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/project">Works</Link>
        <Link href="#">
          <AiFillGithub className="text-2xl" />
        </Link>
        <Link href="#">
          <AiFillLinkedin className="text-2xl" />
        </Link>
        <Link href="#">
          <AiOutlineMail className="text-2xl" />
        </Link>
      </nav>
    </div>
  );
};

export default Menu;
