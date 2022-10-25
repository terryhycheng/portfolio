import { NextPage } from "next";
import Image from "next/image";
import React from "react";
import Footer from "../components/Footer";
import Menu from "../components/Menu";

const project: NextPage = () => {
  return (
    <>
      <Menu />
      <main className="container mx-auto flex flex-col gap-10 max-w-6xl px-4">
        {/* Hero */}
        <section className="mb-6">
          <div className="min-h-[30vh] relative">
            <Image
              src={"https://picsum.photos/1920/600"}
              layout="fill"
              objectFit="cover"
              alt=""
            />
          </div>
          <div className="flex my-6">
            <div className="flex-1">
              <h2 className="font-bold text-2xl">Faculty Printing System</h2>
              <h3>The University of Hong Kong</h3>
            </div>
            <p className="flex-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              iaculis tempor ut nulla. Accumsan malesuada diam purus quis est.
              Dui ut dui, gravida nullam.
            </p>
          </div>
          <div className="flex justify-between gap-4">
            <button className="btn_outline">Demo</button>
            <button className="btn_outline">Figma</button>
            <button className="btn_outline">Github</button>
          </div>
        </section>
        {/* Problems */}
        <section className="flex">
          <div className="flex-1 flex flex-col gap-3">
            <h2 className="font-bold text-2xl mb-4">Problems</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              iaculis tempor ut nulla.
            </p>
            <ul className="list-disc list-inside">
              <li>Lorem ipsum dolor sit amet, consectetur elit.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing.</li>
              <li>Lorem ipsum dolor sit ametconsectetur.</li>
            </ul>
          </div>
          <div className="flex-1 relative min-h-[30vh]">
            <Image
              src={"https://picsum.photos/400/300"}
              layout="fill"
              objectFit="cover"
              alt=""
            />
          </div>
        </section>
        {/* Solutions */}
        <section className="mb-6">
          <h2 className="font-bold text-2xl mb-4">Solutions</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="shadow-md p-6 rounded-md">
              <h3 className="font-bold text-xl mb-2">Solution A</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                iaculis tempor ut nulla. Accumsan malesuada diam purus quis est.
              </p>
            </div>
            <div className="shadow-md p-6 rounded-md">
              <h3 className="font-bold text-xl mb-2">Solution A</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                iaculis tempor ut nulla. Accumsan malesuada diam purus quis est.
              </p>
            </div>
            <div className="shadow-md p-6 rounded-md">
              <h3 className="font-bold text-xl mb-2">Solution A</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                iaculis tempor ut nulla. Accumsan malesuada diam purus quis est.
              </p>
            </div>
          </div>
        </section>
        {/* What I've learnt */}
        <section className="mb-6">
          <div className="mb-4">
            <h2 className="font-bold text-2xl mb-6">What I've Learnt</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus
              nisi augue cursus viverra rhoncus adipiscing diam pretium sit.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="shadow-md p-6 rounded-md">
              <h3 className="font-bold text-xl mb-2">Solution A</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                iaculis tempor ut nulla. Accumsan malesuada diam purus quis est.
              </p>
            </div>
            <div className="shadow-md p-6 rounded-md">
              <h3 className="font-bold text-xl mb-2">Solution A</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                iaculis tempor ut nulla. Accumsan malesuada diam purus quis est.
              </p>
            </div>
            <div className="shadow-md p-6 rounded-md">
              <h3 className="font-bold text-xl mb-2">Solution A</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                iaculis tempor ut nulla. Accumsan malesuada diam purus quis est.
              </p>
            </div>
          </div>
        </section>
        {/* Gallery */}

        <section>
          <h2 className="font-bold text-2xl mb-6">Gallery</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="relative h-[300px]">
              <Image
                src={"https://picsum.photos/500/300"}
                layout="fill"
                objectFit="cover"
                alt=""
              />
            </div>
            <div className="relative h-[300px]">
              <Image
                src={"https://picsum.photos/500/300"}
                layout="fill"
                objectFit="cover"
                alt=""
              />
            </div>
            <div className="relative h-[300px]">
              <Image
                src={"https://picsum.photos/500/300"}
                layout="fill"
                objectFit="cover"
                alt=""
              />
            </div>
            <div className="relative h-[300px]">
              <Image
                src={"https://picsum.photos/500/300"}
                layout="fill"
                objectFit="cover"
                alt=""
              />
            </div>
            <div className="relative h-[300px]">
              <Image
                src={"https://picsum.photos/500/300"}
                layout="fill"
                objectFit="cover"
                alt=""
              />
            </div>
          </div>
        </section>
        <button className="font-semibold underline my-10">Back to Top</button>
      </main>
      <Footer />
    </>
  );
};

export default project;
