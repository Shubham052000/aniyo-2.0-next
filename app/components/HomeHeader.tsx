"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const HomeHeader = () => {
  const path = usePathname();
  return (
    <div className="flex justify-between py-4 pl-5 pr-9">
      <Image alt="" src={""} />

      <div className="flex  justify-end gap-6">
        <Link
          href={"/"}
          className={`${path === "/" && "underline"} underline-offset-8`}
        >
          Home
        </Link>
        <Link
          href={"/search"}
          className={`${path === "/search" && "underline"} underline-offset-8`}
        >
          Search
        </Link>
        <Link
          href={"/learn-more"}
          className={`${
            path === "/learn-more" && "underline"
          } underline-offset-8`}
        >
          Learn more...
        </Link>
      </div>
    </div>
  );
};

export default HomeHeader;
