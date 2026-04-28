import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTopRatedMovies();

  return (
    <div className="browse">
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/* 
        Main container
          - Movie trailer video background
          - Movie trailer video background info - Title, Description Play now button, More info button

        Secondary container
          - Movie list * n
           - Movie card * n
      */}
    </div>
  );
};

export default Browse;
