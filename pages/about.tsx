import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { certData } from "../utilities/data";

const About: NextPage = () => {
  const imageLink = "https://www.math.hkbu.edu.hk/img/hkbu_logo.png";

  return (
    <div className="flex flex-col gap-10">
      {/* Hero Section */}
      <section className="grid grid-cols-3 justify-center items-center min-h-[40vh] gap-10">
        <div>
          <h2 className="text-[60px] uppercase font-bold font-fugaz-one leading-none">
            Terry <br />{" "}
            <span className="relative">
              Cheng{" "}
              <div className=" absolute bottom-4 bg-[#F1E4D1] h-6 w-full -z-10"></div>
            </span>
          </h2>
          <div className="h-20 relative">
            <Image
              src={"/images/dots.png"}
              layout="fill"
              objectFit="contain"
              alt=""
            />
          </div>
          <p className="font-light">+44 7774529454</p>
          <p className="font-light">terryhycheng@gmail.com</p>
        </div>
        <div className="relative min-h-[40vh] w-full">
          <Image
            src={"/images/character-1.png"}
            layout="fill"
            objectFit="contain"
            alt=""
          />
        </div>
        <div>
          <p className="font-light">
            With more than 6 years of experience working in the design industry,
            I am able to handle tasks related to graphic design, motion graphics
            and also front-end development.
          </p>
        </div>
      </section>
      {/* Education */}
      <section>
        <h2 className="text-3xl text-main-c font-bold mb-6">Education</h2>
        <div className="flex justify-around gap-10 shadow-md p-10 rounded-md">
          <div className="relative w-[320px]">
            <Image src={imageLink} layout="fill" objectFit="contain" alt="" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-xl font-bold text-main-c">
              Hong Kong Baptist University
            </p>
            <p className="font-light text-main-c">
              Communication (Digital Graphic Communication)
            </p>
            <p className="font-light italic opacity-60">Graduated in 2015</p>
          </div>
        </div>
      </section>
      {/* Certificates */}
      <section className="mt-6">
        <h2 className="text-3xl text-main-c font-bold mb-6">Certifications</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {certData.map((data) => (
            <>
              <a href={data.certUrl} target="_blank" rel="noreferrer">
                <div
                  key={data.id}
                  className="flex shadow-md p-6 md:p-10 gap-6 cursor-pointer hover-effect ani h-full items-center"
                >
                  <div className="flex-0 relative w-40 h-40">
                    <Image
                      src={data.logoUrl}
                      layout="fill"
                      objectFit="contain"
                      alt=""
                    />
                  </div>
                  <div>
                    <p className=" mb-1">{data.obtained}</p>
                    <h3 className=" font-bold text-lg ">{data.name}</h3>
                    <p className="font-light mb-1 opacity-40">{data.school}</p>
                    <p className="text-sm">{data.description}</p>
                  </div>
                </div>
              </a>
            </>
          ))}
        </div>
      </section>
      <hr className="my-4" />
      {/* My Story */}
      <section className="flex gap-20">
        <div className="relative flex-1 min-h-[40vh] rounded-md overflow-hidden">
          <Image
            src={"https://picsum.photos/1920/1000"}
            layout="fill"
            objectFit="cover"
            alt=""
          />
        </div>
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-3xl text-main-c font-bold mb-6">My Story</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            iaculis tempor ut nulla. Accumsan malesuada diam purus quis est.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            iaculis tempor ut nulla. Accumsan malesuada diam purus quis est.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            iaculis tempor ut nulla. Accumsan malesuada diam purus quis est.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer.
          </p>
        </div>
      </section>
      <hr className="my-6" />
      {/* Hobbies */}
      <section className="flex gap-10">
        <div className="flex-1 flex flex-col justify-center">
          <div className="relative w-40 h-40">
            <Image
              src={"/images/suitcase.png"}
              layout="fill"
              objectFit="contain"
              alt=""
            />
          </div>
          <h2 className="text-3xl text-main-c font-bold my-4">Hobbies</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            iaculis tempor ut nulla. Accumsan malesuada diam purus quis est.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            iaculis tempor ut nulla. Accumsan malesuada diam purus quis est.
          </p>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-4">
          <div className="relative rounded-md overflow-hidden min-h-[20vh]">
            <Image
              src={"https://picsum.photos/500/500"}
              layout="fill"
              objectFit="cover"
              alt=""
            />
          </div>
          <div className="relative rounded-md overflow-hidden min-h-[20vh]">
            <Image
              src={"https://picsum.photos/500/500"}
              layout="fill"
              objectFit="cover"
              alt=""
            />
          </div>
          <div className="relative rounded-md overflow-hidden min-h-[20vh]">
            <Image
              src={"https://picsum.photos/500/500"}
              layout="fill"
              objectFit="cover"
              alt=""
            />
          </div>
          <div className="relative rounded-md overflow-hidden min-h-[20vh]">
            <Image
              src={"https://picsum.photos/500/500"}
              layout="fill"
              objectFit="cover"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
