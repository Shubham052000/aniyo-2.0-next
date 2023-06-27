import AnimeCarousel from "@/components/AnimeCarousel";
import {
  TooltipProvider,
  TooltipContent,
  Tooltip,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const getAnimeList = async (endPoint: string) => {
  const res = await fetch(`https://api.jikan.moe/v4${endPoint}`);
  return res.json();
};
export default async function Home() {
  const animeAiringThisSeason = await getAnimeList("/seasons/now");
  const topAnime = await getAnimeList("/top/anime");
  const upcomingAnime = await getAnimeList("/seasons/upcoming");

  return (
    <>
      <h1 className="mb-2 mt-14 text-4xl font-semibold text-slate-200">
        <span>
          <TooltipProvider delayDuration={150}>
            <Tooltip>
              <TooltipTrigger className="underline underline-offset-8">
                いらっしゃいませ
              </TooltipTrigger>
              <TooltipContent>irasshaimase: "welcome"</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </span>{" "}
        to Aniyo: Your new Anime-ctionary
      </h1>
      <p className=" mb-16 text-lg text-slate-300">
        Discover and share your favorite anime with Aniyo
      </p>
      <h2 className="mb-10 text-2xl font-bold text-slate-300">
        Anime Airing This Season
      </h2>
      <AnimeCarousel animeList={animeAiringThisSeason} />
      <h2 className="mb-10 mt-8 text-2xl font-bold text-slate-300">
        Upcoming Anime
      </h2>
      <AnimeCarousel animeList={upcomingAnime} />
      <h2 className="mb-10 mt-8 text-2xl font-bold text-slate-300">
        Top Anime of all time
      </h2>
      <AnimeCarousel animeList={topAnime} />
    </>
  );
}
