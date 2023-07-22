"use client";
import { MoonStar, Sun } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "./ui/button";

const HomeHeader = () => {
  const path = usePathname();
  const router = useRouter();
  // const themeHandler = () => {
  //   console.log("clicked button");
  // };
  return (
    <div className="mx-auto flex  justify-between py-8 pl-5 pr-9 text-slate-200">
      <Image
        alt="aniyo-logo"
        src={"/logo-no-background.svg"}
        width={100}
        height={100}
        onClick={() => {
          router.push("/");
        }}
        className="cursor-pointer"
      />

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
