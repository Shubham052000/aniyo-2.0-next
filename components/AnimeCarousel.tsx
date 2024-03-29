import { AnimeListType } from "@/types/types";
import AnimeCard from "./AnimeCard";

export type AnimeCarouselProps = {
  animeList: AnimeListType;
};

const AnimeCarousel: React.FC<AnimeCarouselProps> = ({ animeList }) => {
  return (
    <div className="mx-auto mb-28 flex w-[90%] flex-wrap justify-center gap-6 px-11">
      {animeList.data?.slice(0, 10).map((anime) => {
        return <AnimeCard key={anime.mal_id} anime={anime} />;
      })}
    </div>
  );
};

export default AnimeCarousel;
