import HomeHeader from "../components/Layout/HomeHeader";
import Hero from "../components/Layout/HomeHero";
import MovieRow from "../components/PropsComponents/MoviesRows";
import { movieData } from "../data/Data";
import HomeFooter from "../components/Layout/HomeFooter";

function Home() {
  return (
    <div>
      <HomeHeader />
      <Hero />
      <div className=" pt-0 pb-20">
        <MovieRow title="Trending Now" movies={movieData.trending} />
        <MovieRow title="Popular on Netflix" movies={movieData.popular} />
        <MovieRow title="New Releases" movies={movieData.newReleases} />
        <MovieRow title="Comedies" movies={movieData.comedies} />
        <MovieRow title="Documentaries" movies={movieData.documentaries} />
      </div>
      <HomeFooter />
    </div>
  );
}

export default Home;
