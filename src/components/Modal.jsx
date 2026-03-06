import React, { useEffect, useState } from "react";
import "../assets/css/modalCss.css";
import VideoPlayer from "./VideoPlayer";
import axios from "axios";

const Modal = ({ movie, toggleModalState }) => {
  const [trailersArray, setTrailerArray] = useState([]);
  const [movieVideoId, setMovieVideoId] = useState(null);

  const genreMap = {
  28: "Action",
  12: "Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  18: "Drama",
  10751: "Family",
  14: "Fantasy",
  36: "History",
  27: "Horror",
  9648: "Mystery",
  10749: "Romance",
  878: "Science Fiction",
  53: "Thriller",
};

  async function fetchVideoId() {
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/${movie.id}/videos`,
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
    setTrailerArray(data.results);
  }

  function findTrailerFromArray(arr) {
    const lowerCase = (obj) => obj.name?.toLowerCase() || "";
    const officialTrailer = arr.find((obj) =>
      lowerCase(obj).includes("official trailer"),
    );
    const backUpTrailer = arr.find((obj) => lowerCase(obj).includes("trailer"));

    officialTrailer
      ? setMovieVideoId(officialTrailer)
      : setMovieVideoId(backUpTrailer);
  }

  useEffect(() => {
    if (movie?.id) {
      fetchVideoId();
    }
  }, [movie]);

  useEffect(() => {
    findTrailerFromArray(trailersArray);
  }, [trailersArray]);

  return (
    <div className="modal" onClick={toggleModalState}>
      <div
        className="movie__modal__container"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          className="modal__backdrop__img"
          src={`https://image.tmdb.org/t/p/w1920_and_h1080_face/${movie.backdrop_path}`}
          alt=""
        />
        <div className="modal__backdrop__img--grandient--left"></div>
        <div className="modal__backdrop__img--grandient--bottom"></div>
        <button className="close__btn" onClick={toggleModalState}>X</button>
        <div className="movie__modal__info">
          <h2 className="movie__modal__title">{movie.original_title}</h2>
          <ul className="movie__modal__genre__list">
            {movie.genre_ids?.map((id) => (
              <li key={id} className="modal__movie_genre">
                {genreMap[id]}
              </li>
            ))}
          </ul>
          <p className="movie__modal__description">{movie.overview}</p>
          <button className="btn btn-white">Play</button>
          <button className="btn">Trailer</button>
        </div>
        <div className="videoPlayerContainer">
          {movieVideoId ? (
            <VideoPlayer id="Video" videoId={movieVideoId.key} />
          ) : (
            <h2>flase</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
