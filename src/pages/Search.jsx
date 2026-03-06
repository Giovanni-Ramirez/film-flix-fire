import axios from "axios";
import React, { useEffect, useState } from "react";
import '../assets/css/searchcss.css';
import Modal from '../components/Modal';

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const [movieResults, setMovieResults] = useState([]);

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
    console.log(data.results);
    setMovieResults(data.results);
  }

	function movieModalFunc(movie) {
		console.log(movie);
		
	}

  const handleSubmit = (event) => {
    event.preventDefault();
    searchMovies(encodeURIComponent(event.target[0].value));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <button type="submit">Submit</button>
      </form>
      <div>
        <button className="btn">Action</button>
        <button className="btn">Comedy</button>
        <button className="btn">Romance</button>
        <button className="btn">Thriller</button>
        <button className="btn">Thriller</button>
      </div>
      <div className="movie__results">
        {movieResults ? (
          movieResults.map((movie) => (
            <div
              
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
          <h1>false</h1>
        )}
      </div>
      {/* <Modal /> */}
    </div>
  );
};

export default Search;
