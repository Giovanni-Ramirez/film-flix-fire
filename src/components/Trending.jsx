import React, { useEffect, useState } from "react";
import "../assets/css/trending.css";

const Trending = ({ list, featuredMovie, movieModalFunc }) => {
  const [movies, setMovies] = useState([]);

  function shuffleArray(array) {
    const shuffled = [...array];
    let currentIndex = shuffled.length;
    let randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      [shuffled[currentIndex], shuffled[randomIndex]] = [
        shuffled[randomIndex],
        shuffled[currentIndex],
      ];
    }

    return shuffled;
  }

  useEffect(() => {
    // const movie = Array.isArray(list) ? list : [];
    const shuffledArray = shuffleArray(list).slice(0, 6);
    setMovies(shuffledArray);
  }, [list]);
  
  useEffect(()=> {
    // console.log('Movies was set!',movies)  
  }, [movies]) 

  return (
    <div className="trending__container">
      <h2 className="section__title">Trending Now</h2>
      <div className="testing">
        {movies ? (
          movies.map((movie) => (
            <div
              onClick={() => movieModalFunc(movie)}
              className="movie__poster--card"
              key={movie.id}
            >
              <img
                className="movie__poster--img"
                src={`https://image.tmdb.org/t/p/w600_and_h900_face${movie.poster_path}`}
                alt=""
              />
            </div>
          ))
        ) : (
          <h2>WE DON'T HAVE MOVIES</h2>
        )}
        {/* {movies.map((movie) => (
          <div onClick={() => movieModalFunc(movie)} className="movie__poster--card" key={movie.id}>
            <img
              className="movie__poster--img"
              src={`https://image.tmdb.org/t/p/w600_and_h900_face${movie.poster_path}`}
              alt=""
            />
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default Trending;
