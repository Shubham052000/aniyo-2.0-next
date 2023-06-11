"use client";

import { AnimeListType } from "@/types/types";
import AnimeCard from "./AnimeCard";

export type AnimeCarouselProps = {
  animeList: AnimeListType;
};

const AnimeCarousel: React.FC<AnimeCarouselProps> = ({ animeList }) => {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {animeList.data?.slice(0, 15).map((anime) => {
        return <AnimeCard key={anime.mal_id} anime={anime} />;
      })}
    </div>
  );
};

export default AnimeCarousel;
