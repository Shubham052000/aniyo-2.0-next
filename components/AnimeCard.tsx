"use client";
import { AnimeType } from "@/types/types";
import React from "react";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { useRouter } from "next/navigation";

type AnimeCardProps = {
  anime: AnimeType;
};

export const formatName = (title: string) => {
  if (title.length > 21) {
    title = title.substring(0, 18) + "...";
  }
  return title;
};

const AnimeCard: React.FC<AnimeCardProps> = ({ anime }) => {
  const router = useRouter();

  const cardClickHandler = () => {
    router.push(`/anime/${anime.mal_id}`);
  };

  return (
    <div
      className="flex cursor-pointer flex-col text-left"
      onClick={cardClickHandler}
    >
      <Card className="w-[1/5] overflow-hidden rounded-md">
        <CardContent className="group relative h-[350px] w-[240px] overflow-hidden rounded-md">
          <Image
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-fill transition-all duration-300 ease-in-out group-hover:scale-110 "
            src={anime.images.webp.large_image_url}
            alt={anime.title}
          />
          <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-t from-black/40 to-transparent group-hover:from-transparent group-hover:to-transparent"></div>
        </CardContent>
      </Card>
      <p className="text-md mt-1">{formatName(anime.title)}</p>
      <p className="text-xs text-slate-400">
        {anime.aired.string.split("to")[0]}
      </p>
    </div>
  );
};

export default AnimeCard;
