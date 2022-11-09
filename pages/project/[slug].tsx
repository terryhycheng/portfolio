import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { projectData } from "../../utilities/data";
import { projectDataType } from "../../utilities/types";

const Project = ({ projectData }: { projectData: projectDataType[] }) => {
  const router = useRouter();
  const { slug } = router.query;

  const data = projectData.filter((project) => project.slug === slug)[0];

  return (
    <div className="flex flex-col gap-10">
      {/* Hero */}
      <section className="mb-6">
        <div className="min-h-[46vh] relative">
          <Image src={data.imageUrl} layout="fill" objectFit="cover" alt="" />
        </div>
        <div className="flex my-10">
          <div className="flex-1">
            <h2 className="font-bold text-3xl text-main-c">{data.name}</h2>
            <h3 className="text-xl font-light text-main-c">{data.company}</h3>
          </div>
          <p className="flex-1">{data.description}</p>
        </div>
        <div className="flex justify-between gap-4">
          <button className="btn_outline p-2 rounded-md w-full">Demo</button>
          <button className="btn_outline p-2 rounded-md w-full">Figma</button>
          <button className="btn_outline p-2 rounded-md w-full">Github</button>
        </div>
      </section>
      <hr className="mb-4" />
      {/* Problems */}
      <section className="flex">
        <div className="flex-1 flex flex-col gap-3">
          <div className="flex gap-2 items-end">
            <div className="relative w-20 h-20">
              <Image
                src={"/images/problem.png"}
                layout="fill"
                objectFit="contain"
                alt=""
              />
            </div>
            <h2 className="font-bold text-3xl text-main-c mb-4">Problems</h2>
          </div>
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
        <div className="flex-1 relative min-h-[30vh] rounded-md overflow-hidden">
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
        <div className="flex gap-2 items-end">
          <div className="relative w-20 h-20">
            <Image
              src={"/images/solution.png"}
              layout="fill"
              objectFit="contain"
              alt=""
            />
          </div>
          <h2 className="font-bold text-3xl text-main-c mb-4">Solutions</h2>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="shadow-md p-10 rounded-md">
            <h3 className="font-bold text-xl mb-2 text-[#A8D164]">
              Solution A
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              iaculis tempor ut nulla. Accumsan malesuada diam purus quis est.
            </p>
          </div>
          <div className="shadow-md p-10 rounded-md">
            <h3 className="font-bold text-xl mb-2 text-[#A8D164]">
              Solution A
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              iaculis tempor ut nulla. Accumsan malesuada diam purus quis est.
            </p>
          </div>
          <div className="shadow-md p-10 rounded-md">
            <h3 className="font-bold text-xl mb-2 text-[#A8D164]">
              Solution A
            </h3>
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
          <div className="flex gap-2 items-center relative mt-24">
            <div className="absolute w-64 h-64 -left-32 -z-30">
              <Image
                src={"/images/character-2.png"}
                layout="fill"
                objectFit="contain"
                alt=""
              />
            </div>
            <div className="ml-20 z-20">
              <h2 className="font-bold text-3xl text-main-c mb-2">
                What I&apos;ve Learnt
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Senectus nisi augue cursus viverra rhoncus adipiscing diam
                pretium sit.
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="shadow-md p-10 rounded-md">
            <h3 className="font-bold text-xl mb-2 text-main-c">Solution A</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              iaculis tempor ut nulla. Accumsan malesuada diam purus quis est.
            </p>
          </div>
          <div className="shadow-md p-10 rounded-md">
            <h3 className="font-bold text-xl mb-2 text-main-c">Solution A</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              iaculis tempor ut nulla. Accumsan malesuada diam purus quis est.
            </p>
          </div>
          <div className="shadow-md p-10 rounded-md">
            <h3 className="font-bold text-xl mb-2 text-main-c">Solution A</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              iaculis tempor ut nulla. Accumsan malesuada diam purus quis est.
            </p>
          </div>
        </div>
      </section>
      {/* Gallery */}

      <section>
        <h2 className="font-bold text-3xl text-main-c mb-6">Gallery</h2>
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
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  const paths = projectData.map((project) => {
    return { params: { slug: project.slug } };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = () => {
  return {
    props: { projectData: projectData },
  };
};

export default Project;
