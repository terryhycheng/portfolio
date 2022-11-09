import { NextPage } from "next";
import React from "react";
import Footer from "../components/Footer";
import Menu from "../components/Menu";

const works: NextPage = () => {
  return (
    <div>
      <Menu />
      <div className="">Works</div>
      <Footer />
    </div>
  );
};

export default works;
