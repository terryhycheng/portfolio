import { NextPage } from "next";
import Image from "next/image";
import React from "react";
import Footer from "../components/Footer";
import Menu from "../components/Menu";

const About: NextPage = () => {
  const imageLink = "https://www.math.hkbu.edu.hk/img/hkbu_logo.png";
  return (
    <div>
      <Menu />
      <main className="container mx-auto flex flex-col gap-10 max-w-6xl px-4">
        {/* Hero Section */}
        <section className="grid grid-cols-3 justify-center items-center min-h-[40vh] gap-10">
          <div>
            <h2 className="font-bold text-3xl">About Terry Cheng</h2>
            <p>Tel: +44 7774529454</p>
            <p>Email: terryhycheng@gmail.com</p>
          </div>
          <div className=" bg-slate-500 h-full w-full rounded-full"></div>
          <div>
            <p className=" font-bold text-2xl">
              Have been working as graphic designer for more than 7 years
            </p>
            <p>
              With more than 6 years of experience working in the design
              industry, I am able to handle tasks related to graphic design,
              motion graphics and also front-end development.
            </p>
          </div>
        </section>
        {/* Education */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Education</h2>
          <div className="flex gap-10 shadow-md p-10 rounded-md">
            <Image
              src={imageLink}
              width={300}
              height={100}
              objectFit="contain"
              alt=""
            />
            <div className="flex-1 flex flex-col justify-center">
              <p className="text-lg font-bold">Hong Kong Baptist University</p>
              <p>Communication (Digital Graphic Communication)</p>
              <p className="text-sm italic opacity-60">Graduated in 2015</p>
            </div>
          </div>
        </section>
        {/* Certificates */}
        <section className="mt-6">
          <h2 className="text-2xl font-bold mb-6">Certificates</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="shadow-md p-10">
              <h3 className=" font-bold text-xl mb-3">Cert A</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                iaculis tempor ut nulla. Accumsan malesuada diam purus quis est.
              </p>
            </div>
            <div className="shadow-md p-10">
              <h3 className=" font-bold text-xl mb-3">Cert A</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                iaculis tempor ut nulla. Accumsan malesuada diam purus quis est.
              </p>
            </div>
            <div className="shadow-md p-10">
              <h3 className=" font-bold text-xl mb-3">Cert A</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                iaculis tempor ut nulla. Accumsan malesuada diam purus quis est.
              </p>
            </div>
          </div>
        </section>
        <hr className="my-4" />
        {/* My Story */}
        <section className="flex gap-10">
          <Image
            src={"https://picsum.photos/400/300"}
            width={400}
            height={300}
            objectFit="contain"
            alt=""
          />
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-6">My Story</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              iaculis tempor ut nulla. Accumsan malesuada diam purus quis est.
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
            <div>
              <Image
                src={"https://picsum.photos/150/150"}
                width={150}
                height={150}
                objectFit="contain"
                alt=""
                className="rounded-full"
              />
            </div>
            <h2 className="text-2xl font-bold my-6">Hobbies</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              iaculis tempor ut nulla. Accumsan malesuada diam purus quis est.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              iaculis tempor ut nulla. Accumsan malesuada diam purus quis est.
            </p>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4">
            <Image
              src={"https://picsum.photos/500/500"}
              width={500}
              height={500}
              objectFit="contain"
              alt=""
            />
            <Image
              src={"https://picsum.photos/500/500"}
              width={500}
              height={500}
              objectFit="contain"
              alt=""
            />
            <Image
              src={"https://picsum.photos/500/500"}
              width={500}
              height={500}
              objectFit="contain"
              alt=""
            />
            <Image
              src={"https://picsum.photos/500/500"}
              width={500}
              height={500}
              objectFit="contain"
              alt=""
            />
          </div>
        </section>
        <button className="font-semibold underline my-10">Back to Top</button>
      </main>
      <Footer />
    </div>
  );
};

export default About;
