import React from "react";

const page = () => {
  return (
    <div className="mt-20 flex flex-col items-center justify-center gap-11 text-slate-300">
      <div id="resources" className="flex flex-col gap-2 ">
        <p className="text-xl font-bold">Resources: </p>
        <a
          href="https://ui.shadcn.com/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-white"
        >
          shadcn/ui
        </a>
        <a
          href="https://jikan.moe/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-white"
        >
          Jikan API
        </a>
        <a
          href="https://nextjs.org/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-white"
        >
          Next.JS 13
        </a>
      </div>
    </div>
  );
};

export default page;
