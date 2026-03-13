import axios from "axios";
import React, { useState } from "react";
import "../assets/css/searchcss.css";
import Modal from "../components/Modal";
import Nav from "../components/Nav";

const Search = () => {
  const [movieResults, setMovieResults] = useState([]);
  const [movieModal, setMovieModal] = useState({});
  const [modalState, setModalState] = useState(false);

  async function searchMovies(input) {
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/search/movie?query=${input}&language=en-US&page=1&sort_by=popularity.desc`,
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
    // console.log(data.results);
    setMovieResults(data.results);
  }

  function movieModalFunc(movie) {
    setMovieModal(movie);
    toggleModalState();
  }

  function toggleModalState() {
    setModalState(!modalState);
  }

  function sortMovies(event) {
    const value = event.target.value;
    if (movieResults.length > 0) {
      if (value === "new_to_old") {
        const sorted = [...movieResults].sort(
          (a, b) => new Date(b.release_date) - new Date(a.release_date),
        );
        setMovieResults(sorted);
      } else {
        const sorted = [...movieResults].sort(
          (a, b) => new Date(a.release_date) - new Date(b.release_date),
        );
        setMovieResults(sorted);
      }
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    searchMovies(encodeURIComponent(event.target[0].value));
  };

  return (
    <>
      <Nav />
      <div>
        <form onSubmit={handleSubmit} className="search__container">
          <div className="search__bar">
            <input type="text" />
            <button className="btn" type="submit">Submit</button>
          </div>
          <div>
            <label htmlFor="sort">Sort By:</label>
            <select name="sort by" id="sort_by" onChange={sortMovies}>
              <option value="">--Please select an option--</option>
              <option value="old_to_new">Date: Old to New</option>
              <option value="new_to_old">Date: New to Old</option>
            </select>
          </div>
        </form>
        {/* <div>
          <button className="btn">Action</button>
          <button className="btn">Comedy</button>
          <button className="btn">Romance</button>
          <button className="btn">Thriller</button>
          <button className="btn">Thriller</button>
        </div> */}
        <div className="movie__results">
          {movieResults ? (
            movieResults.map((movie) => (
              <div
                onClick={() => movieModalFunc(movie)}
                className="movie__poster--card"
                key={movie.id}
              >
                <img
                  className="movie__poster--img"
                  src={`https://image.tmdb.org/t/p/w600_and_h900_face${movie.poster_path}`}
                  alt={movie.title}
                />
              </div>
            ))
          ) : (
            <h1>false</h1>
          )}
        </div>
        {modalState && (
          <Modal movie={movieModal} toggleModalState={toggleModalState} />
        )}
      </div>
    </>
  );
};

export default Search;
