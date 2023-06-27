"use client";
import { MoonStar, Sun } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

// To-DO: Lucide Icons
const HomeHeader = () => {
  const path = usePathname();
  // const themeHandler = () => {
  //   console.log("clicked button");
  // };
  return (
    <div className="flex justify-between py-8 pl-5 pr-9 text-slate-200">
      <div></div>
      {/* <Image alt="" src={""} /> */}

      <div className="flex items-center justify-end gap-6">
        {/* <Button variant={"ghost"} onClick={themeHandler}>
          <MoonStar />
          <Sun />
        </Button> */}
        <Link
          href={"/"}
          className={`${
            path === "/" && "text-white underline"
          } underline-offset-8`}
        >
          Home
        </Link>
        <Link
          href={"/search"}
          className={`${
            path === "/search" && "text-white underline"
          } underline-offset-8`}
        >
          Search
        </Link>
        <Link
          href={"/get-in-touch"}
          className={`${
            path === "/get-in-touch" && "text-white underline"
          } underline-offset-8`}
        >
          More info &rarr;
        </Link>
      </div>
    </div>
  );
};

export default HomeHeader;
