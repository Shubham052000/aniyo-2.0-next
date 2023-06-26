"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const HomeHeader = () => {
  const path = usePathname();
  return (
    <div className="flex justify-between py-8 pl-5 pr-9 text-slate-200">
      <div></div>
      {/* <Image alt="" src={""} /> */}

      <div className="flex justify-end gap-6">
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
          Get in touch &rarr;
        </Link>
      </div>
    </div>
  );
};

export default HomeHeader;
