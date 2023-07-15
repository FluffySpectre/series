export interface ISeries {
  nr: number;
  title: string;
  description: string;
  cover: string;
  url: string;
  genres: string[];
  languages: string[];
  productionYears: string;
  seasons: number;
  favorite?: boolean;
}

export interface ISeriesFilter {
  query?: string;
  genre?: string[];
  language?: string;
  showFavorites?: boolean;
}
