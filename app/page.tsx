import AnimeCarousel from "@/components/AnimeCarousel";
import TooltipComp from "@/components/TooltipComp";
import {
  TooltipProvider,
  TooltipContent,
  Tooltip,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const getAnimeList = async (endPoint: string) => {
  const res = await fetch(`https://api.jikan.moe/v4${endPoint}`, {
    next: { revalidate: 172800 }, // revalidates the cache after 2 days
  });
  return res.json();
};
export default async function Home() {
  const animeAiringThisSeason = await getAnimeList("/seasons/now");
  const topAnime = await getAnimeList("/top/anime");
  const upcomingAnime = await getAnimeList("/seasons/upcoming");

  return (
    <>
      <h1 className="mb-3 mt-14 text-4xl font-semibold text-slate-200">
        <span>
          <TooltipComp />
        </span>{" "}
        to Aniyo: Your new Anime-ctionary
      </h1>
      <p className=" mb-24 text-lg text-slate-300">
        Discover and share your favorite anime with Aniyo
      </p>
      <h2 className="mb-10 text-3xl font-bold text-slate-300 ">
        Anime Airing This Season
      </h2>
      <AnimeCarousel animeList={animeAiringThisSeason} />
      <h2 className="mb-10 mt-8 text-3xl font-bold text-slate-300 ">
        Upcoming Anime
      </h2>
      <AnimeCarousel animeList={upcomingAnime} />
      <h2 className="mb-10 mt-8 text-3xl font-bold text-slate-300 ">
        Top Anime of all time
      </h2>
      <AnimeCarousel animeList={topAnime} />
    </>
  );
}
