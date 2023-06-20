import React from "react";

// To-DO: Lucide Icons
const HomeFooter = () => {
  return (
    <div className="mx-10 py-10">
      <div className="flex justify-between">
        <div id="aniyo-logo"></div>
        <div id="resources" className="flex flex-col gap-2 text-right">
          <p className="text-sm">Resources: </p>
          <a
            className="text-sm"
            href="https://ui.shadcn.com/"
            target="_blank"
            rel="noreferrer"
          >
            shadcn/ui
          </a>
          <a
            className="text-sm"
            href="https://jikan.moe/"
            target="_blank"
            rel="noreferrer"
          >
            Jikan API
          </a>
          <a
            className="text-sm"
            href="https://nextjs.org/"
            target="_blank"
            rel="noreferrer"
          >
            Next.JS 13
          </a>
        </div>
      </div>
      <div>
        <p className="text- text-center">
          Built and Designed by{" "}
          <a
            href="https://shubham-satyawali.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Shubham Satyawali
          </a>
        </p>
      </div>
    </div>
  );
};

export default HomeFooter;
