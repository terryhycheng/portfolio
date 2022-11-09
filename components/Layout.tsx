import Head from "next/head";
import React, { FC, ReactElement } from "react";
import BackToTop from "./BackToTop";
import Footer from "./Footer";
import Menu from "./Menu";

const Layout = ({ children }: { children: ReactElement }) => {
  return (
    <>
      <Head>
        <title>Terry&apos;s Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />
      <main className="container mx-auto flex flex-col gap-4 max-w-6xl px-4 mb-16 w-full">
        {children}
        {/* <BackToTop /> */}
      </main>
      <footer>
        <Footer />
      </footer>
      ;
    </>
  );
};

export default Layout;
