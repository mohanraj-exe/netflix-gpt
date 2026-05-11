export const NETFLIX_LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const NETFLIX_LOGIN_PAGE =
  "https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg";
export const NETFLIX_USER_AVATAR =
  "https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e";
export const TMDB_FETCH_HEADER = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      `Bearer ${process.env.REACT_APP_TMDB_ACCESS_TOKEN}`,
  },
};

export const TMDB_BASE_URL = "https://api.themoviedb.org/3/movie/";

export const TMDB_NOW_PLAYING_API = "now_playing?page=1";

export const TMDB_POPULAR_MOVIES_API = "popular?page=1";

export const TMDB_UPCOMING_MOVIES_API = "upcoming?page=1";

export const TMDB_TOP_RATED_MOVIES_API = "top_rated?page=1";

export const TMDB_MOVIE_SEARCH = "https://api.themoviedb.org/3/search/movie";

export const TMDB_QUERY_PARAMS = "&include_adult=false&language=en-US&page=1";

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const YT_EMBED_URL_BASE = "https://www.youtube.com/embed/";

export const YT_EMBED_URL_PLAYLIST = "?playlist=";

export const YT_EMBED_URL_LOOP_AUTO_MUTE_CONTROLS =
  "&loop=1&autoplay=1&mute=1&controls=0";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: 'English' },
  { identifier: "tamil", name: 'Tamil' },
  { identifier: "kannada", name: 'Kannada' },
];

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;

export const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_API_KEY;