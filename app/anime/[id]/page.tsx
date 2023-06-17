"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimeType } from "@/types/types";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

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

  return (
    <>
      {anime && (
        <div className="mx-20 my-8">
          <h1 className="mb-10 text-center text-2xl font-bold">
            {anime.title} ({anime.year})
          </h1>
          <div id="media-section" className="flex justify-between">
            <Card className="w-[300px] overflow-hidden rounded-md">
              <CardContent className="relative h-[425px]">
                <Image
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-fill"
                  src={anime.images.webp.large_image_url}
                  alt={anime.title}
                />
              </CardContent>
            </Card>
            <Card className="relative w-[50%]">
              <CardContent>
                <iframe
                  className="absolute left-0 top-0 h-full w-full"
                  src={`${anime.trailer?.embed_url}&vq=hd1080`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={anime.title}
                />
              </CardContent>
            </Card>
          </div>
          <div id="details-section" className="mt-10 text-left  ">
            <div id="title-section" className="mb-2">
              <p className="text-lg">Other titles:</p>
              <p> 🇬🇧: {anime.title_english}</p>
              <p> 🇯🇵: {anime.title_japanese}</p>
            </div>
            <p className="mb-2 italic">{anime.broadcast.string}</p>
            <p className="mb-2">{anime.rating}</p>
            <p>
              <span className="font-bold">🌟 Score: </span>
              {anime.score} ({anime.scored_by})
            </p>
            <p>
              <span className="font-bold">❓ Genre: </span>
              <span className="italic">
                {anime.genres.map((genre) => genre.name).join(", ")}
              </span>
            </p>
            <p>
              <span className="font-bold">📈 Rank: </span>
              {anime.rank}
            </p>

            <p className="mb-3 mt-2">
              Producers:{" "}
              {anime.producers.map((producer) => producer.name).join(", ")}
            </p>
            <p className="mb-1 text-xl font-bold">Synopsis: </p>
            <p>{anime.synopsis}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default AnimePage;
