export type AnimeType = {
  aired: any;
  airing: boolean;
  approved: boolean;
  broadcast: {
    day: string;
    string: string;
    time: string;
    timezone: string;
  };
  demographics: any;
  genres: { mal_id: number; type: string; name: string }[];
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
  producers: { mal_id: number; type: string; name: string; url: string }[];
  studios: { mal_id: number; type: string; name: string; url: string }[];
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
