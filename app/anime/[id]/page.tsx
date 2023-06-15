"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimeType } from "@/types/types";

const AnimePage = () => {
  const id = usePathname();
  const [anime, setAnime] = useState<AnimeType>();

  useEffect(() => {
    (async () => {
      let res = await fetch(`https://api.jikan.moe/v4${id}`);
      let data = await res.json();
      setAnime({ ...data.data });
    })();
  }, []);

  console.log(anime);

  return <>{anime && <p>{anime.title}</p>}</>;
};

export default AnimePage;
