import React, { useEffect, useState } from "react";
import "../assets/css/modalCss.css";
import VideoPlayer from "./VideoPlayer";
import axios from "axios";

const Modal = ({ movie, toggleModalState }) => {
  const [trailersArray , setTrailerArray] = useState([]);
  const [movieVideoId , setMovieVideoId] = useState([]);


  const genres = [
    {
      id: 28,
      name: "Action",
    },
    {
      id: 12,
      name: "Adventure",
    },
    {
      id: 16,
      name: "Animation",
    },
    {
      id: 35,
      name: "Comedy",
    },
    {
      id: 80,
      name: "Crime",
    },
    {
      id: 99,
      name: "Dokumentarfilm",
    },
    {
      id: 18,
      name: "Drama",
    },
    {
      id: 10751,
      name: "Family",
    },
    {
      id: 14,
      name: "Fantasy",
    },
    {
      id: 36,
      name: "History",
    },
    {
      id: 27,
      name: "Horror",
    },
    {
      id: 10402,
      name: "Musik",
    },
    {
      id: 9648,
      name: "Mystery",
    },
    {
      id: 10749,
      name: "Liebesfilm",
    },
    {
      id: 878,
      name: "Science Fiction",
    },
    {
      id: 10770,
      name: "TV-Film",
    },
    {
      id: 53,
      name: "Thriller",
    },
    {
      id: 10752,
      name: "Kriegsfilm",
    },
    {
      id: 37,
      name: "Western",
    },
  ];

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
    const lowerCase = (obj) => obj.name?.toLowerCase() || '';
    const officialTrailer = arr.find(obj => lowerCase(obj).includes('official trailer'));
    const backUpTrailer = arr.find(obj => lowerCase(obj).includes('trailer'));

    officialTrailer ? (
      setMovieVideoId(officialTrailer)
    ) : (
      setMovieVideoId(backUpTrailer)
    );
  } 

  function movieCatagories(genre_id) {
    for (let i = 0; i < genres.length; i++) {
      if (genre_id === genres[i].id) {
        return <li className="modal__movie_genre" key={genres[i].id}>{genres[i].name}</li>;
      }
    }
  }

  useEffect(() => {
    fetchVideoId()
  }, [])

  useEffect(() => {
    // console.log('trailer arry was set', trailersArray);
    findTrailerFromArray(trailersArray);
  }, [trailersArray])

  return (
    <div className="modal" onClick={toggleModalState()}>
      <div
        className="movie__modal__container"
        onClick={(e) => e.stopPropagation()}
      >
        <img className="modal__backdrop__img" src={`https://image.tmdb.org/t/p/w1920_and_h1080_face/${movie.backdrop_path}`} alt=""/>
        <div className="modal__backdrop__img--grandient--left"></div>
        <div className="modal__backdrop__img--grandient--bottom"></div>
        <div className="movie__modal__info">
          <h2 className="movie__modal__title">{movie.original_title}</h2>
          <ul className="movie__modal__genre__list">
            {movie.genre_ids.map((genre) => movieCatagories(genre))}
          </ul>
          <p className="movie__modal__description">{movie.overview}</p>
          <button className="btn btn-white">Play</button>
          <button className="btn">Trailer</button>
        </div>
        <div className="videoPlayerContainer">
        {movieVideoId ? (
          <VideoPlayer id='Video' videoId={movieVideoId.key} />
        ) : (
          <h2>flase</h2>
        )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
