import React from "react";

const BackToTop = () => {
  const scrollBack = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <button
      className="font-semibold underline text-sec-c my-20"
      onClick={scrollBack}
    >
      Back to Top
    </button>
  );
};

export default BackToTop;
