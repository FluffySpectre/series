export interface ISeries {
  nr: number;
  title: string;
  description: string;
  cover: string;
  genres: string[];
  languages: string[];
  productionYears: string;
  seasons: number;
  cast?: string[];
  fsk18?: boolean;
  favorite?: boolean;
}

export interface ISeriesFilter {
  query?: string;
  genre?: string[];
  language?: string[];
  fsk18?: boolean;
  showFavorites?: boolean;
  sortAfterProperty?: string;
  sortDescending?: boolean;
}
