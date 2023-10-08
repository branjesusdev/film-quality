export interface OutSearchMovies {
  page:          number;
  results:       ResultSearch[];
  total_pages:   number;
  total_results: number;
}

interface ResultSearch {
  adult:             boolean;
  backdrop_path:     null | string;
  genre_ids:         number[];
  id:                number;
  original_language: OriginalLanguageSearch;
  original_title:    string;
  overview:          string;
  popularity:        number;
  poster_path:       string;
  release_date:      Date;
  title:             string;
  video:             boolean;
  vote_average:      number;
  vote_count:        number;
}

enum OriginalLanguageSearch {
  En = "en",
  Ja = "ja",
  Ru = "ru",
  Zh = "zh",
}
