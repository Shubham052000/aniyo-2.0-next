import { AnimeType } from "@/types/types";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";

type AnimeCardProps = {
  anime: AnimeType;
};

const AnimeCard: React.FC<AnimeCardProps> = ({ anime }) => {
  console.log(anime.images.webp.large_image_url);
  return (
    <Card className="w-[1/5] overflow-hidden rounded-md">
      <CardContent>
        <Image
          width="200"
          height="300"
          className="object-cover"
          src={anime.images.webp.large_image_url}
          alt={anime.title}
        />
      </CardContent>
      <CardTitle className="text-md">{anime.title}</CardTitle>
    </Card>
  );
};

export default AnimeCard;
