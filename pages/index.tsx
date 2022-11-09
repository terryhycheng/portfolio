import type { NextPage } from "next";
import HomeHero from "../components/HomeHero";
import Skill from "../components/Skills";
import WorkExperience from "../components/WorkExperience";
import WorkGrid from "../components/WorkGrid";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col gap-[50px]">
      <HomeHero />
      <Skill />
      <WorkExperience />
      <WorkGrid />
    </div>
  );
};

export default Home;
