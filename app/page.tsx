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
      <h1 className="mt-14 text-3xl">
        Welcome to Aniyo: Your new Anime-ctionary
      </h1>
      <p className="mb-14 text-lg">
        Discover and share your favorite anime with Aniyo
      </p>
      <h2 className="mb-8 text-2xl underline underline-offset-8">
        Anime Airing This Season
      </h2>
      <AnimeCarousel animeList={animeAiringThisSeason} />
      <h2 className="mb-8 mt-8 text-2xl">Top Anime of all time</h2>
      <AnimeCarousel animeList={topAnime} />
      <h2 className="mb-8 mt-8 text-2xl">Upcoming anime</h2>
      <AnimeCarousel animeList={upcomingAnime} />
    </>
  );
}
