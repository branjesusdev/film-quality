export interface OutPopularMovies {
  page:          number;
  results:       Result[];
  total_pages:   number;
  total_results: number;
}

interface Result {
  adult:             boolean;
  backdrop_path:     string;
  genre_ids:         number[];
  id:                number;
  original_language: OriginalLanguage;
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

enum OriginalLanguage {
  En = "en",
  Es = "es",
  Te = "te",
}
