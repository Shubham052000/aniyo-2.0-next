"use client";
import AnimeCarousel from "@/components/AnimeCarousel";
import { Input } from "@/components/ui/input";
import { AnimeListType } from "@/types/types";
import React, { useEffect, useRef, useState } from "react";
import { Loader2 } from "lucide-react";

const page = () => {
  const [searchedAnime, setSearchedAnime] = useState<string>("");
  const [fetchedAnimeList, setFetchedAnimeList] =
    useState<AnimeListType | null>();
  const [loading, setLoading] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    let timer = setTimeout(() => {
      searchAnime(searchedAnime);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchedAnime]);

  const searchAnime = (searchedString: string) => {
    if (searchedString.length >= 3) {
      setLoading(true);
      fetch(`https://api.jikan.moe/v4/anime?q=${searchedString}&limit=10`)
        .then((res) => res.json())
        .then((data) => setFetchedAnimeList(data));
    } else {
      setLoading(false);
      setFetchedAnimeList(null);
    }
  };

  return (
    <>
      <div className="mx-auto mt-16 w-1/2">
        <Input
          ref={inputRef}
          className="h-16 text-xl"
          placeholder="What's on your mind today?"
          onChange={(event) => {
            setSearchedAnime(event.target.value);
          }}
        />
      </div>

      {searchedAnime.length < 3 && searchedAnime.length > 0 && (
        <p className="mt-16 text-slate-400">
          Hmm... 🤔 try typing more letters
        </p>
      )}

      {loading && !fetchedAnimeList && (
        <div className="mt-16 w-full">
          <Loader2 className="mx-auto h-16 w-16 animate-spin text-slate-400" />
        </div>
      )}

      {fetchedAnimeList && fetchedAnimeList.data.length > 0 && (
        <>
          <p className="mb-10 mt-8 text-center text-3xl">Search Results: </p>
          <AnimeCarousel animeList={fetchedAnimeList} />
        </>
      )}
    </>
  );
};

export default page;
