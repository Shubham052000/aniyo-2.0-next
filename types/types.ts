export type AnimeType = {
  aired: any;
  airing: boolean;
  approved: boolean;
  broadcast: any;
  demographics: any;
  genres: any;
  images: { jpg: any; webp: any };
  mal_id: number;
  members: number;
  popularity: number;
  rank: number;
  rating: string;
  score: number;
  scored_by: number;
  season: string;
  status: string;
  synopsis: string;
  themes: any;
  title: string;
  title_english: string;
  title_japanese: string;
  trailer?: {
    youtube_id?: string;
    url?: string;
    embed_url?: string;
  };
  type: string;
  url: string;
  year: number;
};

export type AnimeListType = {
  data: AnimeType[];
  pagination: {
    current_page: number;
    has_next_page: boolean;
    items: {
      count: number;
      total: number;
      per_page: number;
    };
    last_visible_page: number;
  };
};
