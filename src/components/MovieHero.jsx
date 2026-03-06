import React, { useEffect, useState } from "react";
import "../assets/css/movieHero.css";
import Trending from "./Trending";
import Modal from "./Modal";
import axios from "axios";

const MovieHero = () => {
  const [movieList, setMovieList] = useState([]);
  const [featuredMovie, setFeaturedMovie] = useState({});
	const [trendingMovies, setTrendingMovies] = useState([]);
  const [movieModal, setMovieModal] = useState({});
  const [modalState, setModalState] = useState(false)

  async function fetchPopularMovies() {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_original_language=en",
      params: {
        language: "en-US",
        page: "1",
        region: "840",
      },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNDNjYjY2OGIyZjU0ZDNkNTAzNWRkYzYyNGFiZjE4OCIsIm5iZiI6MTcxMjY5MDcxMC42NDMwMDAxLCJzdWIiOiI2NjE1OTYxNjNkNzQ1NDAxODUwOWI1YTYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.tTZlQPdTUI3RiVDr6hkSsp0LFLw_YB5wR65t83Fmv1k",
      },
    };

    const { data } = await axios.request(options);
    setMovieList(data.results);
  }

  function toggleModalState() {
    setModalState(!modalState);
  }

  useEffect(() => {
    // console.log(movieList);
    const randomIndex = Math.floor(Math.random() * movieList.length);
    const randomPopularMovie = movieList[randomIndex];
    setFeaturedMovie(randomPopularMovie);
		const trendingMoviesArray = movieList.filter((movie) => movie.id !== randomPopularMovie.id);
		setTrendingMovies(trendingMoviesArray)
		// console.log(trendingMoviesArray)

  }, [movieList]);


  useEffect(() => {
    fetchPopularMovies();
  }, []);

  const movieModalFunc = (movie) => {
    toggleModalState()
    setMovieModal(movie)
  }

  return (
    <div className="hero">
      {featuredMovie ? (
        <>
          <div className="hero__backdrop__img--container hero__img--position">
            <img
              className="hero__backdrop__img"
              src={`https://image.tmdb.org/t/p/w1920_and_h1080_face/${featuredMovie.backdrop_path}`}
              alt=""
            />
            <div className="hero__backdrop__gradient"></div>
            <div className="hero__backdrop__gradient--bottom"></div>
          </div>
          <div className="hero__movie--info">
            <h1 className="hero__movie--title">{featuredMovie.original_title}</h1>
            <p className="hero__movie--description">
							{featuredMovie.overview}
            </p>
            <button className="btn btn-white" onClick={() => movieModalFunc(featuredMovie)}>Watch Now</button>
            <button className="btn" onClick={() => movieModalFunc(featuredMovie)}>Details</button>
          </div>
        </>
			) : (
        <h2>Loading</h2>
      )}
      <Trending list={trendingMovies} featuredMovie={featuredMovie} movieModalFunc={movieModalFunc}/>
      {modalState ? (
        <Modal movie={movieModal} toggleModalState={toggleModalState}/>
      ):(
        <></>
      )}
    </div>
  );
};

export default MovieHero;
