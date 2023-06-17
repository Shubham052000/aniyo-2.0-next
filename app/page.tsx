import AnimeCarousel from "@/components/AnimeCarousel";

const getAnimeList = async (endPoint: string) => {
  const res = await fetch(`${process.env.API_BASE_URL}${endPoint}`);
  return res.json();
};
export default async function Home() {
  const animeAiringThisSeason = await getAnimeList("/seasons/now");
  const topAnime = await getAnimeList("/top/anime");
  const upcomingAnime = await getAnimeList("/seasons/upcoming");

  return (
    <>
      <h1 className="mb-2 mt-14 text-4xl font-semibold">
        Welcome to Aniyo: Your new Anime-ctionary
      </h1>
      <p className="text- mb-14 text-lg text-slate-300">
        Discover and share your favorite anime with Aniyo
      </p>
      <h2 className="mb-14 text-2xl text-slate-300 underline  underline-offset-8">
        Anime Airing This Season
      </h2>
      <AnimeCarousel animeList={animeAiringThisSeason} />
      <h2 className="mb-14 mt-8 text-2xl text-slate-300 underline  underline-offset-8">
        Upcoming Anime
      </h2>
      <AnimeCarousel animeList={upcomingAnime} />
      <h2 className="mb-14 mt-8 text-2xl text-slate-300 underline  underline-offset-8">
        Top Anime of all time
      </h2>
      <AnimeCarousel animeList={topAnime} />
    </>
  );
}
