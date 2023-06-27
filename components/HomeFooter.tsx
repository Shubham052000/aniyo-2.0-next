import React from "react";

const HomeFooter = () => {
  return (
    <div className="mx-10 py-10 text-slate-300">
      <p className="text-center text-sm">
        Built and Designed by{" "}
        <a
          href="https://shubham-satyawali.netlify.app/"
          target="_blank"
          rel="noreferrer"
          className="text-slate-200 underline underline-offset-4 duration-100 hover:text-white"
        >
          <span className="font-bold">Shubham Satyawali</span>
        </a>
      </p>
    </div>
  );
};

export default HomeFooter;
